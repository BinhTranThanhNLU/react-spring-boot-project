package com.springboot.spring_boot_shoe.service;

import com.springboot.spring_boot_shoe.dao.CartRepository;
import com.springboot.spring_boot_shoe.dao.ProductVariantRepository;
import com.springboot.spring_boot_shoe.dto.CartDTO;
import com.springboot.spring_boot_shoe.entity.*;
import com.springboot.spring_boot_shoe.mapper.CartMapper;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;

@Service
public class CartService {

    private final CartRepository cartRepository;
    private final CartMapper cartMapper;
    private final ProductVariantRepository productVariantRepository;

    public CartService(CartRepository cartRepository, CartMapper cartMapper, ProductVariantRepository productVariantRepository) {
        this.cartRepository = cartRepository;
        this.cartMapper = cartMapper;
        this.productVariantRepository = productVariantRepository;
    }

    public CartDTO getCart(User user) {
        Cart cart = cartRepository.findByUser(user)
                .orElseGet(() -> {
                    Cart newCart = new Cart();
                    newCart.setUser(user);
                    return cartRepository.save(newCart);
                });
        CartDTO cartDTO = cartMapper.toDto(cart);

        BigDecimal subPrice = cart.getSubPrice();
        BigDecimal discount = BigDecimal.ZERO;

        //shipping
        BigDecimal shippingFee;
        if(subPrice.compareTo(new BigDecimal(3000000)) >= 0) {
            shippingFee = BigDecimal.ZERO;
        } else {
            shippingFee = new BigDecimal("100000");
        }

        BigDecimal total = subPrice.add(shippingFee).subtract(discount);

        cartDTO.setShippingFee(shippingFee);
        cartDTO.setDiscount(discount);
        cartDTO.setTotal(total);

        return cartDTO;
    }

    public CartDTO addItem(User user, ProductVariant variant, int quantity) {
        Cart cart = cartRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        // Kiểm tra item đã tồn tại trong giỏ chưa (variant)
        Optional<CartItem> existingItem = cart.getItems().stream()
                .filter(item -> item.getVariant().getId() == variant.getId())
                .findFirst();

        if (existingItem.isPresent()) {
            existingItem.get().setQuantity(existingItem.get().getQuantity() + quantity);
        } else {
            CartItem newItem = new CartItem();
            newItem.setVariant(variant);
            newItem.setPrice(variant.getProduct().getDiscountedPrice());
            newItem.setQuantity(quantity);
            newItem.setCart(cart);
            cart.getItems().add(newItem);
        }

        cartRepository.save(cart);
        return cartMapper.toDto(cart);
    }

    public CartDTO removeItem(User user, int variantId) {
        Cart cart = cartRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        cart.getItems().removeIf(item -> item.getVariant().getId() == variantId);
        cartRepository.save(cart);

        return cartMapper.toDto(cart);
    }

    public void clearCart(User user) {
        Cart cart = cartRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Cart not found"));
        cart.getItems().clear();
        cartRepository.save(cart);
    }

    public CartDTO updateQuantity(User user, int variantId, int quantity) {
        Cart cart = cartRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        cart.getItems().removeIf(item ->
                item.getVariant().getId() == variantId && quantity <= 0
        );

        cart.getItems().forEach(item -> {
            if(item.getVariant().getId() == variantId && quantity > 0) {
                item.setQuantity(quantity);
            }
        });

        cartRepository.save(cart);
        return cartMapper.toDto(cart);
    }


}

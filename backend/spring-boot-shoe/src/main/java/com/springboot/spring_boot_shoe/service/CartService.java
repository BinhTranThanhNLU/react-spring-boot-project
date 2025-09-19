package com.springboot.spring_boot_shoe.service;

import com.springboot.spring_boot_shoe.dao.CartRepository;
import com.springboot.spring_boot_shoe.dao.ProductVariantRepository;
import com.springboot.spring_boot_shoe.dao.ShippingMethodRepository;
import com.springboot.spring_boot_shoe.dto.CartDTO;
import com.springboot.spring_boot_shoe.entity.*;
import com.springboot.spring_boot_shoe.mapper.CartMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Optional;

@Service
public class CartService {

    private final CartRepository cartRepository;
    private final CartMapper cartMapper;
    private final ProductVariantRepository productVariantRepository;
    private final ShippingMethodRepository shippingMethodRepository;

    public CartService(CartRepository cartRepository, CartMapper cartMapper, ProductVariantRepository productVariantRepository, ShippingMethodRepository shippingMethodRepository) {
        this.cartRepository = cartRepository;
        this.cartMapper = cartMapper;
        this.productVariantRepository = productVariantRepository;
        this.shippingMethodRepository = shippingMethodRepository;
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

        BigDecimal shippingFee = BigDecimal.ZERO;
        if (cart.getShippingMethod() != null) {
            shippingFee = calculateShippingFee(cart.getShippingMethod(), subPrice);
        }


        BigDecimal total = subPrice.add(shippingFee).subtract(discount);

        cartDTO.setShippingFee(shippingFee);
        cartDTO.setDiscount(discount);
        cartDTO.setTotal(total);
        cartDTO.setShippingMethodId(
                cart.getShippingMethod() != null ? cart.getShippingMethod().getId() : null
        );

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

    public CartDTO updateShippingMethod(User user, int shippingMethodId) {
        Cart cart = cartRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        ShippingMethod method = shippingMethodRepository.findById(shippingMethodId)
                .orElseThrow(() -> new RuntimeException("Shipping method not found"));

        cart.setShippingMethod(method);
        cartRepository.save(cart);

        return getCart(user); // gọi lại để tính tổng mới
    }

    public BigDecimal calculateShippingFee(ShippingMethod method, BigDecimal subPrice) {
        if (method.getMinOrderAmount() != null &&
                subPrice.compareTo(method.getMinOrderAmount()) >= 0) {
            return BigDecimal.ZERO; // free nếu >= min_order_amount
        }
        return method.getCost();
    }


    @Transactional
    public void clearCartByUserId(Integer userId) {
        cartRepository.deleteByUserId(userId);
    }
}

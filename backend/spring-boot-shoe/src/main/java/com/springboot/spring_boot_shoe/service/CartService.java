package com.springboot.spring_boot_shoe.service;

import com.springboot.spring_boot_shoe.dao.CartRepository;
import com.springboot.spring_boot_shoe.dto.CartDTO;
import com.springboot.spring_boot_shoe.entity.Cart;
import com.springboot.spring_boot_shoe.entity.CartItem;
import com.springboot.spring_boot_shoe.entity.Product;
import com.springboot.spring_boot_shoe.entity.User;
import com.springboot.spring_boot_shoe.mapper.CartMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartService {

    private final CartRepository cartRepository;
    private final CartMapper cartMapper;

    public CartService(CartRepository cartRepository, CartMapper cartMapper) {
        this.cartRepository = cartRepository;
        this.cartMapper = cartMapper;
    }

    public CartDTO getCart(User user) {
        Cart cart = cartRepository.findByUser(user)
                .orElseGet(() -> {
                    Cart newCart = new Cart();
                    newCart.setUser(user);
                    return cartRepository.save(newCart);
                });
        return cartMapper.toDto(cart);
    }

    public CartDTO addItem(User user, Product product, int quantity) {
        Cart cart = cartRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        // Kiểm tra item đã tồn tại trong giỏ chưa
        Optional<CartItem> existingItem = cart.getItems().stream()
                .filter(i -> i.getProduct().getId() == product.getId())
                .findFirst();

        if (existingItem.isPresent()) {
            existingItem.get().setQuantity(existingItem.get().getQuantity() + quantity);
        } else {
            CartItem newItem = new CartItem();
            newItem.setProduct(product);
            newItem.setPrice(product.getPrice());
            newItem.setQuantity(quantity);
            newItem.setCart(cart);
            cart.getItems().add(newItem);
        }

        cartRepository.save(cart);
        return cartMapper.toDto(cart);
    }

    public CartDTO removeItem(User user, int productId) {
        Cart cart = cartRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        cart.getItems().removeIf(item -> item.getProduct().getId() == productId);
        cartRepository.save(cart);

        return cartMapper.toDto(cart);
    }

    public void clearCart(User user) {
        Cart cart = cartRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Cart not found"));
        cart.getItems().clear();
        cartRepository.save(cart);
    }

}

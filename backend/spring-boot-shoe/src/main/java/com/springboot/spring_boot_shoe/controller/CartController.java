package com.springboot.spring_boot_shoe.controller;

import com.springboot.spring_boot_shoe.dto.CartDTO;
import com.springboot.spring_boot_shoe.entity.User;
import com.springboot.spring_boot_shoe.security.AppUserDetails;
import com.springboot.spring_boot_shoe.service.CartService;
import com.springboot.spring_boot_shoe.service.ProductService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    private final CartService cartService;
    private final ProductService productService;

    public CartController(CartService cartService, ProductService productService) {
        this.cartService = cartService;
        this.productService = productService;
    }

    @GetMapping
    public CartDTO getCart(@AuthenticationPrincipal AppUserDetails appUserDetails) {
        User user = appUserDetails.getUser();
        return cartService.getCart(user);
    }

    @PostMapping("/add")
    public CartDTO addItem(@AuthenticationPrincipal AppUserDetails appUserDetails,
                           @RequestParam int productId,
                           @RequestParam int quantity) {
        User user = appUserDetails.getUser();
        return cartService.addItem(user, productService.getProductEntityById(productId), quantity);
    }

    @DeleteMapping("/remove/{productId}")
    public CartDTO removeItem(@AuthenticationPrincipal AppUserDetails appUserDetails,
                              @PathVariable int productId) {
        User user = appUserDetails.getUser();
        return cartService.removeItem(user, productId);
    }

    @DeleteMapping("/clear")
    public void clearCart(@AuthenticationPrincipal AppUserDetails appUserDetails) {
        User user = appUserDetails.getUser();
        cartService.clearCart(user);
    }
}

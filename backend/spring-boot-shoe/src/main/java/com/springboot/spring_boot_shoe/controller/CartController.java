package com.springboot.spring_boot_shoe.controller;

import com.springboot.spring_boot_shoe.dto.CartDTO;
import com.springboot.spring_boot_shoe.entity.ProductVariant;
import com.springboot.spring_boot_shoe.entity.User;
import com.springboot.spring_boot_shoe.requestmodel.AddCartItemRequest;
import com.springboot.spring_boot_shoe.requestmodel.UpdateCartItemRequest;
import com.springboot.spring_boot_shoe.security.AppUserDetails;
import com.springboot.spring_boot_shoe.service.CartService;
import com.springboot.spring_boot_shoe.service.ProductService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
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
                           @RequestBody AddCartItemRequest request) {
        User user = appUserDetails.getUser();

        List<ProductVariant> variants = productService.getProductEntityById(request.getProductId()).getVariants();

        if (request.getColor() == null && request.getSize() == null) {
            ProductVariant firstVariant = variants.get(0);
            return cartService.addItem(user, firstVariant, request.getQuantity());
        }

        ProductVariant variant = variants.stream()
                .filter(v -> v.getColor().equalsIgnoreCase(request.getColor())
                        && v.getSize().equalsIgnoreCase(request.getSize()))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Product variant not found"));

        return cartService.addItem(user, variant, request.getQuantity());
    }

    @DeleteMapping("/remove/{variantId}")
    public CartDTO removeItem(@AuthenticationPrincipal AppUserDetails appUserDetails,
                              @PathVariable int variantId) {
        User user = appUserDetails.getUser();
        return cartService.removeItem(user, variantId);
    }

    @DeleteMapping("/clear")
    public void clearCart(@AuthenticationPrincipal AppUserDetails appUserDetails) {
        User user = appUserDetails.getUser();
        cartService.clearCart(user);
    }

    @PutMapping
    public CartDTO updateQuantity(@AuthenticationPrincipal AppUserDetails appUserDetails,@RequestBody UpdateCartItemRequest request) {
        User user = appUserDetails.getUser();
        return cartService.updateQuantity(user, request.getVariantId(), request.getQuantity());
    }

    @PutMapping("/shipping/{shippingMethodId}")
    public CartDTO updateShippingMethod(@AuthenticationPrincipal AppUserDetails appUserDetails,
                                        @PathVariable int shippingMethodId) {
        User user = appUserDetails.getUser();
        return cartService.updateShippingMethod(user, shippingMethodId);
    }
}

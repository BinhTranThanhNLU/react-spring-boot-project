package com.springboot.spring_boot_shoe.controller;

import com.springboot.spring_boot_shoe.responsemodel.ProductPageResponse;
import com.springboot.spring_boot_shoe.service.ProductService;
import com.springboot.spring_boot_shoe.dto.ProductDTO;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<ProductDTO> getAllProducts() {
        return productService.getAllProducts();
    }
    
    @GetMapping("/{id}")
    public ProductDTO getProductById(@PathVariable int id) {
        return productService.getProductById(id);
    }

    @GetMapping("/category/{id}")
    public ProductPageResponse getProductsByCategory(
            @PathVariable int id,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "9") int size,
            @RequestParam(required = false) BigDecimal minPrice,
            @RequestParam(required = false) BigDecimal maxPrice,
            @RequestParam(required = false, name = "brands") List<Integer> brands,
            @RequestParam(required = false) String color) {

        return productService.getProductsByCategoryId(id, page, size, minPrice, maxPrice, brands, color);
    }
}


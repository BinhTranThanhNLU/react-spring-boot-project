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
            @RequestParam(required = false, name = "colors") List<String> colors) {

        return productService.getProductsByCategoryId(id, page, size, minPrice, maxPrice, brands, colors);
    }

    @GetMapping("/search")
    public ProductPageResponse searchProducts(
            @RequestParam(required = false) String keyword,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "9") int size,
            @RequestParam(required = false) BigDecimal minPrice,
            @RequestParam(required = false) BigDecimal maxPrice,
            @RequestParam(required = false, name = "brands") List<Integer> brands,
            @RequestParam(required = false, name = "colors") List<String> colors) {

        return productService.searchProducts(keyword, page, size, minPrice, maxPrice, brands, colors);
    }

    @GetMapping("/{id}/related")
    public List<ProductDTO> getRelatedProducts(@PathVariable int id,
                                               @RequestParam(defaultValue = "8") int limit) {
        return productService.getRelatedProducts(id, limit);
    }
}


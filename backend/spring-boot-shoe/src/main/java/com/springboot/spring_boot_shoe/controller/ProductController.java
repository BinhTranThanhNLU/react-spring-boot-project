package com.springboot.spring_boot_shoe.controller;

import com.springboot.spring_boot_shoe.dao.ProductRepository;
import com.springboot.spring_boot_shoe.entity.Product;
import com.springboot.spring_boot_shoe.mapper.ProductMapper;
import com.springboot.spring_boot_shoe.responsemodel.ProductPageResponse;
import com.springboot.spring_boot_shoe.service.ProductService;
import com.springboot.spring_boot_shoe.dto.ProductDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductMapper productMapper;

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<ProductDTO> getAllProducts() {
        return productService.getAllProducts();
    }
    
    @GetMapping("/{id}")
    public ProductDTO getProductById(@PathVariable int id) {
        return productService.getProductById(id);
    }

    @GetMapping("/category/{id}")
    public List<ProductDTO> getProductsByCategory(
            @PathVariable int id,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "12") int size) {
        return productService.getProductsByCategoryId(id, page, size);
    }




}


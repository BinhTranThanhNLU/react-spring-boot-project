package com.springboot.spring_boot_shoe.controller;

import com.springboot.spring_boot_shoe.requestmodel.AddProductRequest;
import com.springboot.spring_boot_shoe.responsemodel.ProductPageResponse;
import com.springboot.spring_boot_shoe.service.BrandService;
import com.springboot.spring_boot_shoe.service.CategoryService;
import com.springboot.spring_boot_shoe.service.ProductService;
import com.springboot.spring_boot_shoe.dto.ProductDTO;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;
    private final BrandService brandService;
    private final CategoryService categoryService;

    public ProductController(ProductService productService, BrandService brandService, CategoryService categoryService) {
        this.productService = productService;
        this.brandService = brandService;
        this.categoryService = categoryService;
    }

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

    @PostMapping("/add")
    public ResponseEntity<ProductDTO> addProduct(@RequestBody AddProductRequest productRequest) {
        ProductDTO newProduct = productService.addProduct(productRequest);
        return new ResponseEntity<>(newProduct, HttpStatus.CREATED);
    }


}


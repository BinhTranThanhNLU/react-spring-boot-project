package com.springboot.spring_boot_shoe.service;

import com.springboot.spring_boot_shoe.dao.ProductRepository;
import com.springboot.spring_boot_shoe.dto.ProductDTO;
import com.springboot.spring_boot_shoe.entity.Product;
import com.springboot.spring_boot_shoe.mapper.ProductMapper;
import com.springboot.spring_boot_shoe.responsemodel.ProductPageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductMapper productMapper;

    public List<ProductDTO> getAllProducts() {
        return productMapper.toDtoList(productRepository.findAll());
    }

    public ProductDTO getProductById(int id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        return productMapper.toDto(product);
    }

    public ProductPageResponse getProductsByCategoryId(
            int categoryId, int page, int size,
            BigDecimal minPrice, BigDecimal maxPrice,
            List<Integer> brandIds, String color) {

        if (minPrice != null && maxPrice != null && minPrice.compareTo(maxPrice) > 0) {
            BigDecimal min = minPrice;
            minPrice = maxPrice;
            maxPrice = min;
        }

        Pageable pageable = PageRequest.of(page, size, Sort.by("id").ascending());

        Page<Product> productPage;
        if (brandIds != null && !brandIds.isEmpty()) {
            productPage = productRepository.findByCategoryOrSubCategory_WithBrands(
                    categoryId, minPrice, maxPrice, brandIds, color, pageable);
        } else {
            productPage = productRepository.findByCategoryOrSubCategory_NoBrands(
                    categoryId, minPrice, maxPrice, color, pageable);
        }

        List<ProductDTO> productDTOs = productMapper.toDtoList(productPage.getContent());
        return new ProductPageResponse(
                productDTOs,
                productPage.getNumber(),
                productPage.getTotalPages(),
                productPage.getTotalElements()
        );
    }

}

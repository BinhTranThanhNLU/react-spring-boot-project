package com.springboot.spring_boot_shoe.service;

import com.springboot.spring_boot_shoe.dao.ProductRepository;
import com.springboot.spring_boot_shoe.dto.ProductDTO;
import com.springboot.spring_boot_shoe.entity.Product;
import com.springboot.spring_boot_shoe.mapper.ProductMapper;
import com.springboot.spring_boot_shoe.responsemodel.ProductPageResponse;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import java.math.BigDecimal;
import java.util.List;

@Service
public class ProductService {

    private ProductRepository productRepository;
    private ProductMapper productMapper;

    public ProductService(ProductRepository productRepository, ProductMapper productMapper) {
        this.productRepository = productRepository;
        this.productMapper = productMapper;
    }

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
            List<Integer> brandIds, List<String> colors) {

        if (minPrice != null && maxPrice != null && minPrice.compareTo(maxPrice) > 0) {
            BigDecimal min = minPrice;
            minPrice = maxPrice;
            maxPrice = min;
        }

        Pageable pageable = PageRequest.of(page, size, Sort.by("id").ascending());

        Page<Product> productPage = productRepository.findByCategoryWithFilters(
                categoryId, minPrice, maxPrice, brandIds, colors, pageable);

        List<ProductDTO> productDTOs = productMapper.toDtoList(productPage.getContent());

        return new ProductPageResponse(
                productDTOs,
                productPage.getNumber(),
                productPage.getTotalPages(),
                productPage.getTotalElements()
        );
    }

    public ProductPageResponse searchProducts(
            String keyword, int page, int size,
            BigDecimal minPrice, BigDecimal maxPrice,
            List<Integer> brandIds, List<String> colors) {

        if (minPrice != null && maxPrice != null && minPrice.compareTo(maxPrice) > 0) {
            BigDecimal temp = minPrice;
            minPrice = maxPrice;
            maxPrice = temp;
        }

        Pageable pageable = PageRequest.of(page, size, Sort.by("id").ascending());

        Page<Product> productPage = productRepository.searchProducts(
                keyword, minPrice, maxPrice, brandIds, colors, pageable);

        List<ProductDTO> productDTOs = productMapper.toDtoList(productPage.getContent());

        return new ProductPageResponse(
                productDTOs,
                productPage.getNumber(),
                productPage.getTotalPages(),
                productPage.getTotalElements()
        );
    }

    public List<ProductDTO> getRelatedProducts(int productId, int limit) {
        Product product = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));

        Pageable pageable = PageRequest.of(0, limit, Sort.by("id").ascending());

        List<Product> related = productRepository.findRelatedByCategory(product.getCategory().getId(), productId, pageable);

        if(related.isEmpty()) {
            related = productRepository.findRelatedByBrand(product.getBrand().getId(), productId, pageable);
        }

        return productMapper.toDtoList(related);
    }


}

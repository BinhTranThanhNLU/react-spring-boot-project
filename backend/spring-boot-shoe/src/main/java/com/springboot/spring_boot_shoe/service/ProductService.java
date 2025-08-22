package com.springboot.spring_boot_shoe.service;

import com.springboot.spring_boot_shoe.dao.ProductRepository;
import com.springboot.spring_boot_shoe.dto.ProductDTO;
import com.springboot.spring_boot_shoe.entity.Product;
import com.springboot.spring_boot_shoe.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductMapper productMapper;

    public List<ProductDTO> getAllProducts() {
        return productRepository.findAll()
                .stream()
                .map(productMapper::toDto)
                .collect(Collectors.toList());
    }

    public ProductDTO getProductById(int id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        return productMapper.toDto(product);
    }

    public List<ProductDTO> getProductsByCategoryId(int categoryId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").ascending());
        return productRepository.findByCategoryOrSubCategory(categoryId, pageable)
                .stream()
                .map(productMapper::toDto)
                .collect(Collectors.toList());
    }


}

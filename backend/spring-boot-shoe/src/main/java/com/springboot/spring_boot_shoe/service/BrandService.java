package com.springboot.spring_boot_shoe.service;

import com.springboot.spring_boot_shoe.dao.BrandRepository;
import com.springboot.spring_boot_shoe.dao.ProductRepository;
import com.springboot.spring_boot_shoe.dto.BrandDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandService {
    private final ProductRepository productRepository;

    public BrandService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<BrandDTO> getAllBrandsWithCount() {
        return productRepository.findAllBrandsWithProductCount();
    }
}
package com.springboot.spring_boot_shoe.service;

import com.springboot.spring_boot_shoe.dao.BrandRepository;
import com.springboot.spring_boot_shoe.dao.ProductRepository;
import com.springboot.spring_boot_shoe.dto.BrandDTO;
import com.springboot.spring_boot_shoe.entity.Brand;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandService {
    private final ProductRepository productRepository;
    private final BrandRepository brandRepository;

    public BrandService(ProductRepository productRepository, BrandRepository brandRepository) {
        this.productRepository = productRepository;
        this.brandRepository = brandRepository;
    }

    public List<BrandDTO> getAllBrandsWithCount() {
        return productRepository.findAllBrandsWithProductCount();
    }

    public Brand findById(int brand) {
        return brandRepository.findById(brand).orElseThrow(() -> new RuntimeException("Brand not found"));
    }
}
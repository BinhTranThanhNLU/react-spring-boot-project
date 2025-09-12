package com.springboot.spring_boot_shoe.dao;

import com.springboot.spring_boot_shoe.entity.ProductVariant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductVariantRepository extends JpaRepository<ProductVariant, Integer> {
    Optional<ProductVariant> findById(int id);
}

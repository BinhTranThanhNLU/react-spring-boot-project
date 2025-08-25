package com.springboot.spring_boot_shoe.dao;

import com.springboot.spring_boot_shoe.entity.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepository extends JpaRepository<Brand, Integer> {
}

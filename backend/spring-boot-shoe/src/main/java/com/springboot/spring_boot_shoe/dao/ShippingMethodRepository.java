package com.springboot.spring_boot_shoe.dao;

import com.springboot.spring_boot_shoe.entity.ShippingMethod;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShippingMethodRepository extends JpaRepository<ShippingMethod, Integer> {
}

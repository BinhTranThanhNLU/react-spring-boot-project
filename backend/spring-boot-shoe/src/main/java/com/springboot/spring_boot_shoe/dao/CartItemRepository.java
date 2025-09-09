package com.springboot.spring_boot_shoe.dao;

import com.springboot.spring_boot_shoe.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Integer> {
}

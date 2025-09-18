package com.springboot.spring_boot_shoe.dao;

import com.springboot.spring_boot_shoe.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {
}

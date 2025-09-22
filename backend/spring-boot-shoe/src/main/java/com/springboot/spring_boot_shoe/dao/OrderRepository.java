package com.springboot.spring_boot_shoe.dao;

import com.springboot.spring_boot_shoe.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    Optional<Order> findById(int id);
}

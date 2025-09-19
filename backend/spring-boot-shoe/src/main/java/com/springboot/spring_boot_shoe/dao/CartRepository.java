package com.springboot.spring_boot_shoe.dao;

import com.springboot.spring_boot_shoe.entity.Cart;
import com.springboot.spring_boot_shoe.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Integer> {
    Optional<Cart> findByUser(User user);

    void deleteByUserId(int userId);
}

package com.springboot.spring_boot_shoe.dao;

import com.springboot.spring_boot_shoe.entity.PasswordResetToken;
import com.springboot.spring_boot_shoe.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Integer> {
    Optional<PasswordResetToken> findByToken(String token);
    void deleteByUser(User user);
}

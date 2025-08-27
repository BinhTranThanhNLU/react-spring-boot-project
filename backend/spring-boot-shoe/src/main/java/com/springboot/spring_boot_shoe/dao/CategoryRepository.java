package com.springboot.spring_boot_shoe.dao;

import com.springboot.spring_boot_shoe.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

    @Query("SELECT c FROM Category c LEFT JOIN FETCH c.subs WHERE c.id = :id")
    Optional<Category> findByIdWithSubcategories(Integer id);

}

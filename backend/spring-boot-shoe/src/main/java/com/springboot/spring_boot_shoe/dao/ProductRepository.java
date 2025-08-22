package com.springboot.spring_boot_shoe.dao;

import com.springboot.spring_boot_shoe.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    List<Product> findByCategory_Id(int id);

    @Query("SELECT p FROM Product p " +
            "WHERE p.category.id = :categoryId " +
            "   OR p.category.parent.id = :categoryId")
    List<Product> findByCategoryOrSubCategory(@Param("categoryId") int categoryId);

}

package com.springboot.spring_boot_shoe.dao;

import com.springboot.spring_boot_shoe.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    // Có lọc theo brands (IN)
    @Query("SELECT DISTINCT p FROM Product p " +
            "LEFT JOIN p.variants v " +
            "WHERE (p.category.id = :categoryId OR p.category.parent.id = :categoryId) " +
            "AND (:minPrice IS NULL OR p.price >= :minPrice) " +
            "AND (:maxPrice IS NULL OR p.price <= :maxPrice) " +
            "AND (:color IS NULL OR v.color = :color) " +
            "AND (p.brand.id IN :brandIds)")
    Page<Product> findByCategoryOrSubCategory_WithBrands(
            @Param("categoryId") int categoryId,
            @Param("minPrice") BigDecimal minPrice,
            @Param("maxPrice") BigDecimal maxPrice,
            @Param("brandIds") List<Integer> brandIds,
            @Param("color") String color,
            Pageable pageable);

    // KHÔNG lọc theo brand (khi brandIds null/empty)
    @Query("SELECT DISTINCT p FROM Product p " +
            "LEFT JOIN p.variants v " +
            "WHERE (p.category.id = :categoryId OR p.category.parent.id = :categoryId) " +
            "AND (:minPrice IS NULL OR p.price >= :minPrice) " +
            "AND (:maxPrice IS NULL OR p.price <= :maxPrice) " +
            "AND (:color IS NULL OR v.color = :color)")
    Page<Product> findByCategoryOrSubCategory_NoBrands(
            @Param("categoryId") int categoryId,
            @Param("minPrice") BigDecimal minPrice,
            @Param("maxPrice") BigDecimal maxPrice,
            @Param("color") String color,
            Pageable pageable);
}

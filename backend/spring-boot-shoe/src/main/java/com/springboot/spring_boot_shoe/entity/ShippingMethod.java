package com.springboot.spring_boot_shoe.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "shipping_methods")
public class ShippingMethod {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_shipping_method")
    private Integer id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(name = "cost", nullable = false)
    private BigDecimal cost;

    @Column(name = "min_order_amount")
    private BigDecimal minOrderAmount; // Free ship nếu đơn hàng >= giá trị này

    public ShippingMethod() {
    }

    public ShippingMethod(Integer id, String name, BigDecimal cost, BigDecimal minOrderAmount) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.minOrderAmount = minOrderAmount;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getCost() {
        return cost;
    }

    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }

    public BigDecimal getMinOrderAmount() {
        return minOrderAmount;
    }

    public void setMinOrderAmount(BigDecimal minOrderAmount) {
        this.minOrderAmount = minOrderAmount;
    }

    @Override
    public String toString() {
        return "ShippingMethod{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", cost=" + cost +
                ", minOrderAmount=" + minOrderAmount +
                '}';
    }
}

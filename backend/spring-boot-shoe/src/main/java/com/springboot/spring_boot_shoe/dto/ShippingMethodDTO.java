package com.springboot.spring_boot_shoe.dto;

import java.math.BigDecimal;

public class ShippingMethodDTO {

    private int id;
    private String name;
    private BigDecimal cost;
    private BigDecimal minOrderAmount;

    public ShippingMethodDTO() {
    }

    public ShippingMethodDTO(int id, String name, BigDecimal cost, BigDecimal minOrderAmount) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.minOrderAmount = minOrderAmount;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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
}

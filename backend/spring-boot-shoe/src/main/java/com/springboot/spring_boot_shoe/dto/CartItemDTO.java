package com.springboot.spring_boot_shoe.dto;

import java.math.BigDecimal;

public class CartItemDTO {

    private String title;
    private String size;
    private String color;
    private BigDecimal price;
    private int quantity;
    private BigDecimal total;
    private String image;

    public CartItemDTO() {
    }

    public CartItemDTO(String title, String size, String color, BigDecimal price, int quantity, BigDecimal total, String image) {
        this.title = title;
        this.size = size;
        this.color = color;
        this.price = price;
        this.quantity = quantity;
        this.total = total;
        this.image = image;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}

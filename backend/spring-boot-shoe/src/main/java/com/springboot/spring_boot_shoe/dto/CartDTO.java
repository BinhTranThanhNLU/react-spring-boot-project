package com.springboot.spring_boot_shoe.dto;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class CartDTO {

    private int idUser;
    private List<CartItemDTO> cartItems = new ArrayList<>();
    private BigDecimal subPrice;
    private BigDecimal shippingFee;
    private BigDecimal discount;
    private BigDecimal total;

    public CartDTO() {
    }

    public CartDTO(int idUser, List<CartItemDTO> cartItems, BigDecimal subPrice, BigDecimal shippingFee, BigDecimal discount, BigDecimal total) {
        this.idUser = idUser;
        this.cartItems = cartItems;
        this.subPrice = subPrice;
        this.shippingFee = shippingFee;
        this.discount = discount;
        this.total = total;
    }

    public List<CartItemDTO> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<CartItemDTO> cartItems) {
        this.cartItems = cartItems;
    }

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public BigDecimal getSubPrice() {
        return subPrice;
    }

    public void setSubPrice(BigDecimal subPrice) {
        this.subPrice = subPrice;
    }

    public BigDecimal getShippingFee() {
        return shippingFee;
    }

    public void setShippingFee(BigDecimal shippingFee) {
        this.shippingFee = shippingFee;
    }

    public BigDecimal getDiscount() {
        return discount;
    }

    public void setDiscount(BigDecimal discount) {
        this.discount = discount;
    }

    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }
}

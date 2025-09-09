package com.springboot.spring_boot_shoe.dto;

import java.util.ArrayList;
import java.util.List;

public class CartDTO {

    private List<CartItemDTO> cartItems = new ArrayList<>();
    private int idUser;

    public CartDTO() {
    }

    public CartDTO(List<CartItemDTO> cartItems, int idUser) {
        this.cartItems = cartItems;
        this.idUser = idUser;
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
}

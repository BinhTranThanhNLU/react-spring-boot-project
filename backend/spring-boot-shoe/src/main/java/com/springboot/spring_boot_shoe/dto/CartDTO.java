package com.springboot.spring_boot_shoe.dto;

import java.util.ArrayList;
import java.util.List;

public class CartDTO {

    private int idUser;
    private List<CartItemDTO> cartItems = new ArrayList<>();


    public CartDTO() {
    }

    public CartDTO(int idUser, List<CartItemDTO> cartItems) {
        this.idUser = idUser;
        this.cartItems = cartItems;
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

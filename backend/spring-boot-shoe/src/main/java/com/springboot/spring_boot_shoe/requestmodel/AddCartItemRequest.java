package com.springboot.spring_boot_shoe.requestmodel;

public class AddCartItemRequest {

    private int productId;
    private int quantity;
    private String color;
    private String size;

    public AddCartItemRequest() {
    }

    public AddCartItemRequest(int productId, int quantity) {
        this.productId = productId;
        this.quantity = quantity;
    }

    public AddCartItemRequest(int productId, int quantity, String color, String size) {
        this.productId = productId;
        this.quantity = quantity;
        this.color = color;
        this.size = size;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

}

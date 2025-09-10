package com.springboot.spring_boot_shoe.requestmodel;

public class UpdateCartItemRequest {

    private int productId;
    private int quantity;

    public UpdateCartItemRequest() {
    }

    public UpdateCartItemRequest(int productId, int quantity) {
        this.productId = productId;
        this.quantity = quantity;
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
}

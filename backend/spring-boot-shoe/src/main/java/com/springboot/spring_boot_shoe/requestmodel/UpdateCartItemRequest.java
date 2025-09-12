package com.springboot.spring_boot_shoe.requestmodel;

public class UpdateCartItemRequest {

    private int variantId;
    private int quantity;

    public UpdateCartItemRequest() {
    }

    public UpdateCartItemRequest(int variantId, int quantity) {
        this.variantId = variantId;
        this.quantity = quantity;
    }

    public int getVariantId() {
        return variantId;
    }

    public void setVariantId(int variantId) {
        this.variantId = variantId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}

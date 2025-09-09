package com.springboot.spring_boot_shoe.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "cart_item")
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cart_item")
    private int id;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_product")
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_cart")
    private Cart cart;

    public CartItem() {
    }

    public CartItem(int id, int quantity, BigDecimal price, Product product, Cart cart) {
        this.id = id;
        this.quantity = quantity;
        this.price = price;
        this.product = product;
        this.cart = cart;
    }

    public String getFirstVariantSize() {
        return (product != null && product.getVariants() != null && !product.getVariants().isEmpty())
                ? product.getVariants().get(0).getSize()
                : null;
    }

    public String getFirstVariantColor() {
        return (product != null && product.getVariants() != null && !product.getVariants().isEmpty())
                ? product.getVariants().get(0).getColor()
                : null;
    }

    public String getFirstImageUrl() {
        return (product != null && product.getImages() != null && !product.getImages().isEmpty())
                ? product.getImages().get(0).getImageUrl()
                : null;
    }

    public BigDecimal getTotalPrice() {
        return (price != null)
                ? price.multiply(BigDecimal.valueOf(quantity))
                : BigDecimal.ZERO;
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    @Override
    public String toString() {
        return "CartItem{" +
                "id=" + id +
                ", quantity=" + quantity +
                ", price=" + price +
                ", product=" + product +
                ", cart=" + cart +
                '}';
    }
}

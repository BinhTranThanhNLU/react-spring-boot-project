package com.springboot.spring_boot_shoe.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class PaymentDTO {
    private int id;
    private String method;
    private String status;
    private String transactionId;
    private BigDecimal amount;
    private LocalDateTime date;

    public PaymentDTO() {
    }

    public PaymentDTO(int id, String method, String status, String transactionId, BigDecimal amount, LocalDateTime date) {
        this.id = id;
        this.method = method;
        this.status = status;
        this.transactionId = transactionId;
        this.amount = amount;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}

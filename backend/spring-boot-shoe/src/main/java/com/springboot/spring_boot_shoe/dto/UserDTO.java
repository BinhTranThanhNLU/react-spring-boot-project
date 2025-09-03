package com.springboot.spring_boot_shoe.dto;

import java.time.LocalDateTime;

public class UserDTO {
    private int id;
    private String fullName;
    private String email;
    private String phone;
    private boolean status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private RoleDTO role;

    public UserDTO() {
    }

    public UserDTO(int id, String fullName, String email, String phone, boolean status, LocalDateTime createdAt, LocalDateTime updatedAt, RoleDTO role) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.role = role;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public RoleDTO getRole() {
        return role;
    }

    public void setRole(RoleDTO role) {
        this.role = role;
    }
}

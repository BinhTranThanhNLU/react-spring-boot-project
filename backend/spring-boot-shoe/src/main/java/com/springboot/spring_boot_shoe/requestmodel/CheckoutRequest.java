package com.springboot.spring_boot_shoe.requestmodel;

import com.springboot.spring_boot_shoe.dto.CheckoutItemDTO;
import com.springboot.spring_boot_shoe.entity.CartItem;

import java.math.BigDecimal;
import java.util.List;

public class CheckoutRequest {

    // customer info
    private String nameCustomer;
    private String emailCustomer;
    private String phoneCustomer;

    // address (nếu user muốn dùng địa chỉ mới)
    private Integer idAddress; // nếu null -> tạo mới
    private String fullName;
    private String phone;
    private String street;
    private String ward;
    private String district;
    private String city;

    // payment
    private String paymentMethod; // "COD","BANK_TRANSFER","MOMO","ZALOPAY","VNPAY"

    // order
    private BigDecimal totalAmount;
    private List<CheckoutItemDTO> items;

    public CheckoutRequest() {
    }

    public CheckoutRequest(String nameCustomer, String emailCustomer, String phoneCustomer, Integer idAddress, String fullName, String phone, String street, String ward, String district, String city, String paymentMethod, BigDecimal totalAmount, List<CheckoutItemDTO> items) {
        this.nameCustomer = nameCustomer;
        this.emailCustomer = emailCustomer;
        this.phoneCustomer = phoneCustomer;
        this.idAddress = idAddress;
        this.fullName = fullName;
        this.phone = phone;
        this.street = street;
        this.ward = ward;
        this.district = district;
        this.city = city;
        this.paymentMethod = paymentMethod;
        this.totalAmount = totalAmount;
        this.items = items;
    }

    public String getNameCustomer() {
        return nameCustomer;
    }

    public void setNameCustomer(String nameCustomer) {
        this.nameCustomer = nameCustomer;
    }

    public String getEmailCustomer() {
        return emailCustomer;
    }

    public void setEmailCustomer(String emailCustomer) {
        this.emailCustomer = emailCustomer;
    }

    public String getPhoneCustomer() {
        return phoneCustomer;
    }

    public void setPhoneCustomer(String phoneCustomer) {
        this.phoneCustomer = phoneCustomer;
    }

    public Integer getIdAddress() {
        return idAddress;
    }

    public void setIdAddress(Integer idAddress) {
        this.idAddress = idAddress;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getWard() {
        return ward;
    }

    public void setWard(String ward) {
        this.ward = ward;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public BigDecimal getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(BigDecimal totalAmount) {
        this.totalAmount = totalAmount;
    }

    public List<CheckoutItemDTO> getItems() {
        return items;
    }

    public void setItems(List<CheckoutItemDTO> items) {
        this.items = items;
    }
}

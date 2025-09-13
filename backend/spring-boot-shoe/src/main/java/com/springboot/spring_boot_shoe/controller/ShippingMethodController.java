package com.springboot.spring_boot_shoe.controller;

import com.springboot.spring_boot_shoe.dto.ShippingMethodDTO;
import com.springboot.spring_boot_shoe.entity.ShippingMethod;
import com.springboot.spring_boot_shoe.service.ShippingMethodService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/shipping-methods")
public class ShippingMethodController {

    private final ShippingMethodService shippingMethodService;

    public ShippingMethodController(ShippingMethodService shippingMethodService) {
        this.shippingMethodService = shippingMethodService;
    }

    @GetMapping
    public List<ShippingMethodDTO> getShippingMethods() {
        return shippingMethodService.getAllMethods();
    }
}

package com.springboot.spring_boot_shoe.controller;

import com.springboot.spring_boot_shoe.dto.OrderDTO;
import com.springboot.spring_boot_shoe.requestmodel.CheckoutRequest;
import com.springboot.spring_boot_shoe.security.AppUserDetails;
import com.springboot.spring_boot_shoe.service.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public ResponseEntity<OrderDTO> createOrder(@AuthenticationPrincipal AppUserDetails appUserDetails, @RequestBody CheckoutRequest req) {
        Integer userId = appUserDetails.getUser().getId();
        OrderDTO created = orderService.createOrder(req, userId);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<OrderDTO> updateStatus(@PathVariable int id, @RequestParam String status) {
        return ResponseEntity.ok(orderService.updateOrderStatus(id, status));
    }

}

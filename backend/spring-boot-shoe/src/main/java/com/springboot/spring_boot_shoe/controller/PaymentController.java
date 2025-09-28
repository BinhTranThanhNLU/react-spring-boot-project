package com.springboot.spring_boot_shoe.controller;

import com.springboot.spring_boot_shoe.dto.PaymentDTO;
import com.springboot.spring_boot_shoe.service.PaymentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @GetMapping("/{idPayment}")
    public ResponseEntity<PaymentDTO> getPaymentById(@PathVariable("idPayment") int idPayment) {
        PaymentDTO paymentDTO = paymentService.getPaymentById(idPayment);
        return ResponseEntity.ok(paymentDTO);
    }

}

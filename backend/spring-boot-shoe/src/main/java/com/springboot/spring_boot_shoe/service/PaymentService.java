package com.springboot.spring_boot_shoe.service;

import com.springboot.spring_boot_shoe.dao.PaymentRepository;
import com.springboot.spring_boot_shoe.dto.PaymentDTO;
import com.springboot.spring_boot_shoe.entity.Payment;
import com.springboot.spring_boot_shoe.mapper.PaymentMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class PaymentService {

    private final PaymentRepository paymentRepository;
    private final PaymentMapper paymentMapper;

    public PaymentService(PaymentRepository paymentRepository, PaymentMapper paymentMapper) {
        this.paymentRepository = paymentRepository;
        this.paymentMapper = paymentMapper;
    }

    public PaymentDTO createPayment(PaymentDTO dto) {
        Payment payment = paymentMapper.toEntity(dto);
        payment.setStatus("PENDING");
        payment.setDate(LocalDateTime.now());
        return paymentMapper.toDTO(paymentRepository.save(payment));
    }

    public PaymentDTO updatePaymentStatus(int id, String status) {
        Payment payment = paymentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Payment not found"));
        payment.setStatus(status);
        return paymentMapper.toDTO(paymentRepository.save(payment));
    }

    public PaymentDTO getPaymentById(int id) {
        return paymentRepository.findById(id)
                .map(paymentMapper::toDTO)
                .orElseThrow(() -> new RuntimeException("Payment not found"));
    }

}

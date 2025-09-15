package com.springboot.spring_boot_shoe.mapper;

import com.springboot.spring_boot_shoe.dto.PaymentDTO;
import com.springboot.spring_boot_shoe.entity.Payment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface PaymentMapper {
    PaymentDTO toDTO(Payment payment);
    Payment toEntity(PaymentDTO dto);
}

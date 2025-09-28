package com.springboot.spring_boot_shoe.service;

import com.springboot.spring_boot_shoe.dao.ShippingMethodRepository;
import com.springboot.spring_boot_shoe.dto.ShippingMethodDTO;
import com.springboot.spring_boot_shoe.entity.ShippingMethod;
import com.springboot.spring_boot_shoe.mapper.ShippingMethodMapper;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class ShippingMethodService {

    private final ShippingMethodRepository shippingMethodRepository;
    private final ShippingMethodMapper shippingMethodMapper;

    public ShippingMethodService(ShippingMethodRepository shippingMethodRepository, ShippingMethodMapper shippingMethodMapper) {
        this.shippingMethodRepository = shippingMethodRepository;
        this.shippingMethodMapper = shippingMethodMapper;
    }

    public List<ShippingMethodDTO> getAllMethods() {
        return shippingMethodMapper.toDtoList(shippingMethodRepository.findAll());
    }

    public ShippingMethod getMethodById(int id) {
        return shippingMethodRepository.findById(id).orElse(null);
    }

}

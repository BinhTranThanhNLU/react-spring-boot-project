package com.springboot.spring_boot_shoe.mapper;

import com.springboot.spring_boot_shoe.dto.ProductDTO;
import com.springboot.spring_boot_shoe.dto.ShippingMethodDTO;
import com.springboot.spring_boot_shoe.entity.Product;
import com.springboot.spring_boot_shoe.entity.ShippingMethod;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ShippingMethodMapper {
    ShippingMethodDTO toDto (ShippingMethod shippingMethod);
    List<ShippingMethodDTO> toDtoList(List<ShippingMethod> shippingMethods);
}

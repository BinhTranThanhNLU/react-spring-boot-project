package com.springboot.spring_boot_shoe.mapper;

import com.springboot.spring_boot_shoe.dto.OrderItemDTO;
import com.springboot.spring_boot_shoe.entity.OrderItem;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderItemMapper {

    @Mapping(source = "variant.id", target = "idVariant")
    OrderItemDTO toDto(OrderItem entity);

    @Mapping(source = "idVariant", target = "variant.id")
    OrderItem toEntity(OrderItemDTO dto);

    List<OrderItemDTO> toDtoList(List<OrderItem> entities);

    List<OrderItem> toEntityList(List<OrderItemDTO> dtos);
}

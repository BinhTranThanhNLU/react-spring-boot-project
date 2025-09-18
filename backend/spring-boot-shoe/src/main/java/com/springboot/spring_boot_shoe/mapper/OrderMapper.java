package com.springboot.spring_boot_shoe.mapper;

import com.springboot.spring_boot_shoe.dto.OrderDTO;
import com.springboot.spring_boot_shoe.entity.Order;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = {OrderItemMapper.class})
public interface OrderMapper {

    @Mapping(source = "user.id", target = "idUser")
    @Mapping(source = "address.id", target = "idAddress")
    @Mapping(source = "payment.id", target = "idPayment")
    @Mapping(source = "items", target = "items")
    OrderDTO toDto(Order entity);

    @Mapping(source = "idUser", target = "user.id")
    @Mapping(source = "idAddress", target = "address.id")
    @Mapping(source = "idPayment", target = "payment.id")
    @Mapping(source = "items", target = "items")
    Order toEntity(OrderDTO dto);

    List<OrderDTO> toDtoList(List<Order> entities);

    List<Order> toEntityList(List<OrderDTO> dtos);


}

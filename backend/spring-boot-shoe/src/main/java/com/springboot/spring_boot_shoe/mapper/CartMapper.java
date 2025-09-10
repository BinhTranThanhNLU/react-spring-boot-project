package com.springboot.spring_boot_shoe.mapper;

import com.springboot.spring_boot_shoe.dto.CartDTO;
import com.springboot.spring_boot_shoe.dto.CartItemDTO;
import com.springboot.spring_boot_shoe.entity.Cart;
import com.springboot.spring_boot_shoe.entity.CartItem;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CartMapper {

    @Mapping(source = "user.id", target = "idUser")
    @Mapping(source = "items", target = "cartItems")
    @Mapping(source = "subPrice", target = "subPrice")
    CartDTO toDto(Cart cart);

    @Mapping(source = "product.id", target = "idProduct")
    @Mapping(source = "product.name", target = "title")
    @Mapping(source = "firstVariantSize", target = "size")
    @Mapping(source = "firstVariantColor", target = "color")
    @Mapping(source = "firstImageUrl", target = "image")
    @Mapping(source = "totalPrice", target = "total")
    CartItemDTO toDto(CartItem cartItem);

    Cart toEntity(CartDTO cartDTO);
    CartItem toEntity(CartItemDTO cartItemDTO);
}

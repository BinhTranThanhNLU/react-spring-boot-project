package com.springboot.spring_boot_shoe.mapper;

import com.springboot.spring_boot_shoe.dto.ProductDTO;
import com.springboot.spring_boot_shoe.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    @Mapping(source = "brand.name", target = "brand")
    @Mapping(source = "category.name", target = "category")
    ProductDTO toDto(Product product);

}

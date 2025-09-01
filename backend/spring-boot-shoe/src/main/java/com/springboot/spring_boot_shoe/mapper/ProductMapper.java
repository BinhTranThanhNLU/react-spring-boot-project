package com.springboot.spring_boot_shoe.mapper;

import com.springboot.spring_boot_shoe.dto.ProductDTO;
import com.springboot.spring_boot_shoe.dto.ProductImageDTO;
import com.springboot.spring_boot_shoe.dto.ProductVariantDTO;
import com.springboot.spring_boot_shoe.entity.Product;
import com.springboot.spring_boot_shoe.entity.ProductImage;
import com.springboot.spring_boot_shoe.entity.ProductVariant;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    @Mapping(source = "brand.name", target = "brand")
    @Mapping(source = "category.name", target = "category")
    @Mapping(target = "discountedPrice", expression = "java(product.getDiscountedPrice())")
    ProductDTO toDto(Product product);

    ProductImageDTO toDto(ProductImage image);

    ProductVariantDTO toDto(ProductVariant productVariant);

    List<ProductDTO> toDtoList(List<Product> products);

}

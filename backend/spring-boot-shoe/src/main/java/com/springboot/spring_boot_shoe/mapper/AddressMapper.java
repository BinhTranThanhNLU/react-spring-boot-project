package com.springboot.spring_boot_shoe.mapper;

import com.springboot.spring_boot_shoe.dto.AddressDTO;
import com.springboot.spring_boot_shoe.entity.Address;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AddressMapper {
    @Mapping(source = "user.id", target = "idUser")
    AddressDTO toDto(Address address);

    List<AddressDTO> toDto(List<Address> addresses);

    Address toEntity(AddressDTO addressDTO);
}

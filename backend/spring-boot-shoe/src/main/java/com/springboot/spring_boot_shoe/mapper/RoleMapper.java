package com.springboot.spring_boot_shoe.mapper;

import com.springboot.spring_boot_shoe.dto.RoleDTO;
import com.springboot.spring_boot_shoe.entity.Role;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RoleMapper {

    RoleDTO toDto(Role role);

    Role toEntity(RoleDTO dto);
}

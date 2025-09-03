package com.springboot.spring_boot_shoe.mapper;

import com.springboot.spring_boot_shoe.dto.UserDTO;
import com.springboot.spring_boot_shoe.entity.Role;
import com.springboot.spring_boot_shoe.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = RoleMapper.class)
public interface UserMapper {
    UserDTO toDto(User user);
    User toEntity(UserDTO dto);
}


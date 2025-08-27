package com.springboot.spring_boot_shoe.mapper;

import com.springboot.spring_boot_shoe.dto.CategoryDTO;
import com.springboot.spring_boot_shoe.entity.Category;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface CategoryMapper {

    CategoryDTO toDto(Category category);

    // custom mapping cho danh sách con
    default CategoryDTO toDtoWithSubs(Category category) {
        if (category == null) return null;

        List<CategoryDTO> subDtos = null;
        if (category.getSubs() != null) {
            subDtos = category.getSubs().stream()
                    .map(this::toDtoWithSubs)
                    .collect(Collectors.toList());
        }

        return new CategoryDTO(
                category.getId(),
                category.getName(),
                category.getDescription(),
                subDtos
        );
    }

}

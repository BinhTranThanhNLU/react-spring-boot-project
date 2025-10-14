package com.springboot.spring_boot_shoe.service;

import com.springboot.spring_boot_shoe.dao.CategoryRepository;
import com.springboot.spring_boot_shoe.dto.CategoryDTO;
import com.springboot.spring_boot_shoe.entity.Category;
import com.springboot.spring_boot_shoe.mapper.CategoryMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    public CategoryService(CategoryRepository categoryRepository, CategoryMapper categoryMapper) {
        this.categoryRepository = categoryRepository;
        this.categoryMapper = categoryMapper;
    }

    public List<CategoryDTO> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();

        // Chỉ lấy categories cha (parent = null)
        List<Category> rootCategories = categories.stream()
                .filter(c -> c.getParent() == null)
                .collect(Collectors.toList());

        return rootCategories.stream()
                .map(categoryMapper::toDtoWithSubs)
                .collect(Collectors.toList());
    }

    public CategoryDTO getCategoryById(Integer id) {
        return categoryRepository.findByIdWithSubcategories(id)
                .map(categoryMapper::toDtoWithSubs)
                .orElseThrow(() -> new RuntimeException("Category not found"));
    }

    public Category findById(int categoryId) {
        return categoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));
    }
}

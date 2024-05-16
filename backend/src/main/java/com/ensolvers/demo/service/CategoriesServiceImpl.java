package com.ensolvers.demo.service;

import com.ensolvers.demo.models.Category;
import com.ensolvers.demo.repository.CategoriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CategoriesServiceImpl  implements CategoriesService {

    @Autowired
    private CategoriesRepository categoryRepository;

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category addCategory(Category category) {
        category.setCreatedAt(LocalDateTime.now());
        return categoryRepository.save(category);
    }

    @Override
    public void deleteCategory(Integer id) {
        categoryRepository.deleteById(id);
    }
}

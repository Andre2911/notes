package com.ensolvers.demo.service;

import com.ensolvers.demo.models.Category;

import java.util.List;

public interface CategoriesService {
    public List<Category> getAllCategories();
    public Category addCategory(Category category);
    public void deleteCategory(Integer id);
}

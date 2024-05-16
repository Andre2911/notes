package com.ensolvers.demo.controller;

import com.ensolvers.demo.models.Category;
import com.ensolvers.demo.repository.CategoriesRepository;
import com.ensolvers.demo.service.CategoriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    private final  CategoriesService categoryService;

    public CategoryController(CategoriesService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping
    public List<Category> getCategories() {
        return categoryService.getAllCategories();
    }

    @PostMapping
    public Category addCategory(@RequestBody Category category) {
        return categoryService.addCategory(category);
    }

    @DeleteMapping("/{id}")
    public void deleteCategorybyId(@PathVariable("id") Integer id){
        categoryService.deleteCategory(id);
    }
}

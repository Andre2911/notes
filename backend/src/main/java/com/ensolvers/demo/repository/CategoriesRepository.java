package com.ensolvers.demo.repository;

import com.ensolvers.demo.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriesRepository extends JpaRepository<Category, Integer> {
}

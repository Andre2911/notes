package com.ensolvers.demo.repository;


import java.util.Optional;

import com.ensolvers.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByUsername(String username);
}
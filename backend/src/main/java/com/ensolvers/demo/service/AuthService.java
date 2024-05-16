package com.ensolvers.demo.service;

import com.ensolvers.demo.payload.AuthResponse;
import com.ensolvers.demo.payload.LoginRequest;
import com.ensolvers.demo.payload.RegisterRequest;

public interface AuthService {
    public AuthResponse login(LoginRequest request);
    public AuthResponse register(RegisterRequest request);
}

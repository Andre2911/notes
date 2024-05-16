package com.ensolvers.demo.service;

import com.ensolvers.demo.models.User;
import com.ensolvers.demo.models.types.Role;
import com.ensolvers.demo.payload.AuthResponse;
import com.ensolvers.demo.payload.LoginRequest;
import com.ensolvers.demo.payload.RegisterRequest;
import com.ensolvers.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements  AuthService{

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        UserDetails user=userRepository.findByUsername(request.getUsername()).orElseThrow();
        String token=jwtService.getToken(user);
        return AuthResponse.builder()
                .token(token)
                .build();
    }

    @Override
    public AuthResponse register(RegisterRequest request) {
        User user = User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode( request.getPassword()))
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .role(Role.USER)
                .build();

        userRepository.save(user);

        return AuthResponse.builder()
                .token(jwtService.getToken(user))
                .build();
    }
}

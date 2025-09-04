package com.springboot.spring_boot_shoe.controller;

import com.springboot.spring_boot_shoe.dto.UserDTO;
import com.springboot.spring_boot_shoe.requestmodel.LoginRequest;
import com.springboot.spring_boot_shoe.requestmodel.RegisterRequest;
import com.springboot.spring_boot_shoe.responsemodel.LoginResponse;
import com.springboot.spring_boot_shoe.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<UserDTO> register(@RequestBody RegisterRequest req) {
        UserDTO registeredUser = authService.register(req);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest req) {
        String token = authService.login(req.getEmail(), req.getPassword());
        UserDTO user = authService.getUserFromToken(token);
        return ResponseEntity.ok(new LoginResponse(token, user));
    }

    @GetMapping("/me")
    public ResponseEntity<UserDTO> getMe(@RequestHeader("Authorization") String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.badRequest().build();
        }
        String token = authHeader.substring(7);
        UserDTO user = authService.getUserFromToken(token);
        return ResponseEntity.ok(user);
    }
}
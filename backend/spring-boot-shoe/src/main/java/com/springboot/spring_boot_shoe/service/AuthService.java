package com.springboot.spring_boot_shoe.service;

import com.springboot.spring_boot_shoe.dao.RoleRepository;
import com.springboot.spring_boot_shoe.dao.UserRepository;
import com.springboot.spring_boot_shoe.dto.UserDTO;
import com.springboot.spring_boot_shoe.entity.Role;
import com.springboot.spring_boot_shoe.entity.User;
import com.springboot.spring_boot_shoe.mapper.RoleMapper;
import com.springboot.spring_boot_shoe.requestmodel.RegisterRequest;
import com.springboot.spring_boot_shoe.security.JwtService;
import com.springboot.spring_boot_shoe.mapper.UserMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final UserMapper userMapper;
    private final RoleMapper roleMapper;

    public AuthService(UserRepository userRepository, RoleRepository roleRepository,
                       PasswordEncoder passwordEncoder,
                       JwtService jwtService,
                       UserMapper userMapper, RoleMapper roleMapper) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.userMapper = userMapper;
        this.roleMapper = roleMapper;
    }

    // Đăng ký
    public UserDTO register(RegisterRequest req) {
        if (userRepository.findByEmail(req.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User();
        user.setFullName(req.getFullName());
        user.setEmail(req.getEmail());
        user.setPassword(passwordEncoder.encode(req.getPassword()));
        user.setStatus(true);

        // Gán role mặc định là USER
        Role defaultRole = roleRepository.findByName("USER")
                .orElseThrow(() -> new RuntimeException("Role USER not found"));
        user.setRole(defaultRole);

        User saved = userRepository.save(user);
        return userMapper.toDto(saved);
    }

    // Đăng nhập
    public String login(String email, String rawPassword) {
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            throw new RuntimeException("User not found");
        }
        User user = userOpt.get();
        if (!passwordEncoder.matches(rawPassword, user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }
        return jwtService.generateToken(user.getEmail());
    }

    // Lấy thông tin user từ JWT
    public UserDTO getUserFromToken(String token) {
        String email = jwtService.extractSubject(token);
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return userMapper.toDto(user);
    }
}


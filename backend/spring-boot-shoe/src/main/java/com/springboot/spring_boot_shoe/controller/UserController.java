package com.springboot.spring_boot_shoe.controller;

import com.springboot.spring_boot_shoe.dto.UserDTO;
import com.springboot.spring_boot_shoe.service.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public UserDTO getUserById(int id) {
        return userService.getUserById(id).getBody();
    }

}

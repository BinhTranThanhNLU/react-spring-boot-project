package com.springboot.spring_boot_shoe.controller;

import com.springboot.spring_boot_shoe.dto.UserDTO;
import com.springboot.spring_boot_shoe.requestmodel.UpdateUserRequest;
import com.springboot.spring_boot_shoe.security.AppUserDetails;
import com.springboot.spring_boot_shoe.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<UserDTO> getUserById(@AuthenticationPrincipal AppUserDetails appUserDetail) {
        int id = appUserDetail.getUser().getId();
        return userService.getUserById(id);
    }

    @PatchMapping
    public ResponseEntity<UserDTO> updateUser(@AuthenticationPrincipal AppUserDetails appUserDetail,
                                              @RequestBody UpdateUserRequest req) {
        int id = appUserDetail.getUser().getId();
        return userService.updateUser(id, req);
    }


}

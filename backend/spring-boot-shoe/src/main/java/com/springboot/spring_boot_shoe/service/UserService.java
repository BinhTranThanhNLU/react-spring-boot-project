package com.springboot.spring_boot_shoe.service;

import com.springboot.spring_boot_shoe.dao.UserRepository;
import com.springboot.spring_boot_shoe.dto.UserDTO;
import com.springboot.spring_boot_shoe.entity.User;
import com.springboot.spring_boot_shoe.mapper.UserMapper;
import com.springboot.spring_boot_shoe.requestmodel.UpdateUserRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public ResponseEntity<UserDTO> getUserById(int id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
        UserDTO userDTO = userMapper.toDto(user);
        return ResponseEntity.ok(userDTO);
    }

    public ResponseEntity<UserDTO> updateUser(int idUser, UpdateUserRequest req) {
        User existingUser = userRepository.findById(idUser)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + idUser));

        if (req.getFullName() != null) {
            existingUser.setFullName(req.getFullName());
        }
        if (req.getEmail() != null) {
            existingUser.setEmail(req.getEmail());
        }
        if (req.getPhone() != null) {
            existingUser.setPhone(req.getPhone());
        }
        existingUser.setUpdatedAt(LocalDateTime.now());

        User updateUser = userRepository.save(existingUser);
        UserDTO updatedUserDTO = userMapper.toDto(updateUser);

        return ResponseEntity.ok(updatedUserDTO);
    }


}

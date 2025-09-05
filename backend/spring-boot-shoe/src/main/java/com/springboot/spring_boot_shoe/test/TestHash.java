package com.springboot.spring_boot_shoe.test;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class TestHash {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String raw = "Binh0402@";
        String hash = encoder.encode(raw);
        System.out.println(hash);
    }
}
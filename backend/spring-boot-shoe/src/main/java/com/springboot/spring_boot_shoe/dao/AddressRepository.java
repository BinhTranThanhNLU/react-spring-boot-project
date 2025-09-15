package com.springboot.spring_boot_shoe.dao;

import com.springboot.spring_boot_shoe.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AddressRepository extends JpaRepository<Address, Integer> {
    List<Address> findByUserId(Integer userId);
}

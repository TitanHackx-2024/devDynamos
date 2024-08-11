package com.farmershub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.farmershub.entity.Product;

@Repository
public interface ProductProfileRepository  extends JpaRepository<Product, Integer>{

    List<Product> findAll();
    List<Product> findByUserId(String userId);
    List<Product> findByProductName(String productName);
}
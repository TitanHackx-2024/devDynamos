package com.farmershub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.farmershub.entity.Product;

public interface ProductProfileRepository  extends JpaRepository<Product, Integer>{

    List<Product> findAll();
    List<Product> findProduct(String product);
}
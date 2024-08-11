package com.farmershub.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.farmershub.entity.ProductProfile;

public interface ProductProfileRepository  extends JpaRepository<ProductProfile, Integer>{

    List<ProductProfile> findProduct(String product);
}

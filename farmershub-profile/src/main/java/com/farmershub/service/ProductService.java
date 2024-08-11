package com.farmershub.service;

import com.farmershub.entity.ProductProfile;
import com.farmershub.repository.ProductProfileRepository;
import org.springframework.stereotype.Service;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;


@Service
public class ProductService {
    @Autowired
    ProductProfileRepository productProfileRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public ProductProfile save(ProductProfile productProfile) throws SQLException{
        return productProfileRepository.save(productProfile);
    }

    public List<ProductProfile> findProduct(String product) throws SQLException{
        return productProfileRepository.findProduct(product);
    }
}

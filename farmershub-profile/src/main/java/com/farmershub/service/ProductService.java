package com.farmershub.service;

import com.farmershub.entity.Product;
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

    public Product save(Product product) throws SQLException{
        return productProfileRepository.save(product);
    }

    public List<Product> findAll() throws SQLException{
        return productProfileRepository.findAll();
    }
}

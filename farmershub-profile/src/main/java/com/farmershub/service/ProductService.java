package com.farmershub.service;

import com.farmershub.entity.Product;
import com.farmershub.repository.ProductProfileRepository;
import org.springframework.stereotype.Service;
import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;


@Service
public class ProductService {
	
    @Autowired
    ProductProfileRepository productProfileRepository;


    public Product save(Product product) throws SQLException{
        return productProfileRepository.save(product);
    }

    public List<Product> findAll() throws SQLException{
        return productProfileRepository.findAll();
    }

    public List<Product> findProductByProductName(String productName) throws SQLException{
        return productProfileRepository.findByProductName(productName);
    }
    
    public List<Product> findProductByUserId(String userId) throws SQLException{
        return productProfileRepository.findByUserId(userId);
    }
}
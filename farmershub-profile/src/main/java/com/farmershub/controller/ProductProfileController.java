package com.farmershub.controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.farmershub.dto.Message;
import com.farmershub.entity.Product;
import com.farmershub.service.JWTService;
import com.farmershub.service.ProductService;

@RestController
@RequestMapping("/product")
public class ProductProfileController {

    @Autowired
    ProductService productService;

    @Autowired
    JWTService jwtService;

    @PostMapping("/create")
    public Message addProduct(@RequestBody Product product) {
        System.out.println(product.toString());
        try {
            productService.save(product);
            return new Message("Product saved successfully");
        }catch (SQLException e) {
            return new Message("There was exception creating Product : " + e.getMessage());
        }
    }

    @GetMapping("/findAll")
    public List<Product> findAll() {
        try {
            return productService.findAll();
        }catch (SQLException e) {
            return null;
        }
    }

    @GetMapping("/findProduct/{productName}")
    public List<Product> findProduct(@PathVariable String productName) {
        try {
            return productService.findProductByProductName(productName);
        }catch (SQLException e) {
            return null;
        }
    }

}
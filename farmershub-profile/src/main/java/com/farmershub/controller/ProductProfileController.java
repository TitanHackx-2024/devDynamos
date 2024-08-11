package com.farmershub.controller;

import java.sql.SQLException;
import java.util.List;

import com.farmershub.entity.ProductProfile;
import com.farmershub.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.farmershub.dto.Message;
import com.farmershub.service.JWTService;
import com.farmershub.service.ProductService;

@RestController
@RequestMapping("product")
public class ProductProfileController {

    @Autowired
    ProductService productService;

    @Autowired
    JWTService jwtService;

    @PostMapping("/create")
    public Message addProduct(@RequestBody ProductProfile productProfile) {
        System.out.println(productProfile.toString());
        try {
            productService.save(productProfile);
            return new Message("Product saved successfully");
        }catch (SQLException e) {
            return new Message("There was exception creating Product : " + e.getMessage());
        }
    }

    @GetMapping("/findProduct")
    public List<ProductProfile> findProduct(@PathVariable String product) {
        try {
            return productService.findProduct(product);
        }catch (SQLException e) {
            return null;
        }
    }

}

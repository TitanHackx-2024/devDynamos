package com.farmershub.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pid;

    private String productName;
    private String userId;
    private int quantity;
    private String unit;
    private int price;
    private int pincode;

    @Override
    public String toString() {
        return "Product [pid=" + pid + ", product_name=" + productName + ", product_owner=" + userId + ", available_qty="
                + quantity + ", sku=" + unit + ", rate=" + price + ", location=" + pincode + "]";
    }
}
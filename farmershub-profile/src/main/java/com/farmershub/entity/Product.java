package com.farmershub.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//product_name varchar(100) not null,
//  product_owner number,
//  available_qty number,
//  sku varchar(10),
//  rate number,
//  location number


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pid;

    private String product_name;
    private int product_owner;
    private int available_qty;
    private String sku;
    private int rate;
    private int location;

    @Override
    public String toString() {
        return "Product [pid=" + pid + ", product_name=" + product_name + ", product_owner=" + product_owner + ", available_qty="
                + available_qty + ", sku=" + sku + ", rate=" + rate + ", location=" + location + "]";
    }
}

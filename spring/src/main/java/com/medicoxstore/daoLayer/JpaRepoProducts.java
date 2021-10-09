package com.medicoxstore.daoLayer;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medicoxstore.entity.Product;

public interface JpaRepoProducts extends JpaRepository<Product,Long> {

}

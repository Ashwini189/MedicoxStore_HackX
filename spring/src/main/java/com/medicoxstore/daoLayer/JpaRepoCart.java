package com.medicoxstore.daoLayer;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medicoxstore.entity.Cart;

public interface JpaRepoCart extends JpaRepository<Cart, Long> {

}

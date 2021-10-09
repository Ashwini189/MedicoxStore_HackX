package com.medicoxstore.daoLayer;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medicoxstore.entity.Order;

public interface JpaRepoOrder extends JpaRepository<Order, Long> {

	
}
package com.medicoxstore.daoLayer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.medicoxstore.entity.User;

public interface JpaRepoUser extends JpaRepository<User,Long> {

}

package com.medicoxstore.daoLayer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicoxstore.entity.login;

@Repository
public interface JpaRepoLogin extends JpaRepository<login, String>{

} 





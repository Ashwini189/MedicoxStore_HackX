package com.medicoxstore.entity;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class login {


	@Id
	private String email;

	private String password;

	public String getEmail() {
	return email;
	}
	public void setEmail(String email) {
	this.email = email;
	}
	public String getPassword() {
	return password;
	}
	public void setPassword(String password) {
	this.password = password;
	}
	public login(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	public login() {
		super();
	}
	}

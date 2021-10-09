package com.medicoxstore.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="products")
public class Product{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long productId;
	
	private String productName;
	private long productRate;
	private String productDesc;
	private String productLink;
	public long getProductId() {
		return productId;
	}
	public void setProductId(long productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public long getProductRate() {
		return productRate;
	}
	public void setProductRate(long productRate) {
		this.productRate = productRate;
	}
	public String getProductDesc() {
		return productDesc;
	}
	public void setProductDesc(String productDesc) {
		this.productDesc = productDesc;
	}
	public String getProductLink() {
		return productLink;
	}
	public void setProductLink(String productLink) {
		this.productLink = productLink;
	}
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Product(long productId, String productName, long productRate, String productDesc, String productLink) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productRate = productRate;
		this.productDesc = productDesc;
		this.productLink = productLink;
	}
	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", productRate=" + productRate
				+ ", productDesc=" + productDesc + ", productLink=" + productLink + "]";
	}
		
	
}

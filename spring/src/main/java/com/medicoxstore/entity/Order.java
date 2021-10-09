package com.medicoxstore.entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="orders")
public class Order {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long OrderId;
	
	private String name;
	private long rate;
	private long quantity;
	private String link;
	private String phone;
	public long getId() {
		return OrderId;
	}
	public void setId(long id) {
		this.OrderId = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getRate() {
		return rate;
	}
	public void setRate(long rate) {
		this.rate = rate;
	}
	public long getQuantity() {
		return quantity;
	}
	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public Order(long id, String name, long rate, long quantity, String link, String phone) {
		super();
		this.OrderId = id;
		this.name = name;
		this.rate = rate;
		this.quantity = quantity;
		this.link = link;
		this.phone = phone;
	}
	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Order [id=" + OrderId + ", name=" + name + ", rate=" + rate + ", quantity=" + quantity + ", link=" + link
				+ ", phone=" + phone + "]";
	}
	
	
	
}

package com.medicoxstore.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medicoxstore.Exception.ResourceNotFound;
import com.medicoxstore.daoLayer.JpaRepoCart;
import com.medicoxstore.daoLayer.JpaRepoLogin;
import com.medicoxstore.daoLayer.JpaRepoOrder;
import com.medicoxstore.daoLayer.JpaRepoProducts;
import com.medicoxstore.daoLayer.JpaRepoUser;
import com.medicoxstore.entity.Cart;
import com.medicoxstore.entity.Order;
import com.medicoxstore.entity.Product;
import com.medicoxstore.entity.User;
import com.medicoxstore.entity.login;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class MedicoxController {
	
	@Autowired
	private JpaRepoLogin jparepologin;
	
	@Autowired
	JpaRepoUser repoUser;
	
	@Autowired
	JpaRepoProducts repoProducts;
	
	@Autowired
	JpaRepoOrder repoOrders;
	
	@Autowired
	JpaRepoCart repoCart;
	
//	ADD USER , PRODUCT, ORDER,CART
	
	@PostMapping("/addUser")
	public String addUser(@RequestBody User user) {
		repoUser.save(user);
		return "User created Successfully";
	}
	
	@PostMapping("/addProduct")
	public String addUser(@RequestBody Product product) {
		repoProducts.save(product);
		return "Product Added Successfully";
	}
	
	@PostMapping("/addOrder")
	public String addOrder(@RequestBody Order order) {
		repoOrders.save(order);
		return "Order Added Successfully";
	}

	@PostMapping("/addCart")
	public String addCart(@RequestBody Cart cart) {
		repoCart.save(cart);
		return "Cart Added Successfully";
	}

	
	//Logged in user 
	@RequestMapping("/users")
	public boolean users(@RequestBody login data) {

		Optional<login> result = jparepologin.findById(data.getEmail());
		if(result.isEmpty())
		  return false;

		login lm = result.get();

		if(data.getPassword().equals(lm.getPassword()))
		  return true;
		else
		  return false;
		}
	
	
	// GET USER PRODUCT ORDER
	
	@GetMapping("/getAllProducts")
	public List<Product> getAllProducts(){
		return repoProducts.findAll();
	}
	
	@GetMapping("/getAllOrders")
	public List<Order> getAllOrders(){
		return repoOrders.findAll();	
	}
	
	@GetMapping("/getAllCart")
	public List<Cart> getAllCart(){
		return repoCart.findAll();	
	}
	
	@GetMapping("/getOrderById/{orderId}")
	public Order getOrderById(@PathVariable long orderId) {
		Order ordobj=repoOrders.findById(orderId)
				.orElseThrow(()-> new ResourceNotFound("order does not exist with id :" +orderId));
		return ordobj;
		
	}
	
	@GetMapping("/getCartById/{cartId}")
	public Cart getCartById(@PathVariable long cartId) {
		Cart cartobj=repoCart.findById(cartId)
				.orElseThrow(()-> new ResourceNotFound("Cart does not exist with id :" +cartId));
		return cartobj;
		
	}
	
	//DELETE PRODUCT AND ORDER
	@DeleteMapping("/deleteProduct/{proId}")
	public String deleteProduct(@PathVariable long proId) {
		Product pro=repoProducts.findById(proId)
				.orElseThrow(()-> new ResourceNotFound("Product does not exist with id :" +proId));
		repoProducts.delete(pro);
		return "Product ID "+proId+"Deleted SuccessFully";
		
	}
	
	@DeleteMapping("/deleteOrder/{orderId}")
	public String deleteOrder(@PathVariable long orderId) {
		Order ord=repoOrders.findById(orderId)
				.orElseThrow(()-> new ResourceNotFound("Order does not exist with id :" +orderId));
		repoOrders.delete(ord);
		return "Order ID "+orderId+" is Deleted SuccessFully";
		
	}
	
	@DeleteMapping("/deleteCart/{cartId}")
	public String deleteCart(@PathVariable long cartId) {
		Cart crt=repoCart.findById(cartId)
				.orElseThrow(()-> new ResourceNotFound("Cart does not exist with id :" +cartId));
		repoCart.delete(crt);
		return "Order ID "+cartId+" is Deleted SuccessFully";
		
	}
	
//	Update Quantity and Deliver in Order Table
	
	@PutMapping("updateOrder/{orderId}")
	public String updateOrder(@PathVariable long orderId,@RequestBody Order order) {

		Order ordObj = repoOrders.findById(orderId)
				.orElseThrow(()-> new ResourceNotFound("Order does not exist with id :" + orderId));
		
		ordObj.setName(order.getName());
		ordObj.setQuantity(order.getQuantity());
		ordObj.setPhone(order.getPhone());
		ordObj.setLink(order.getLink());
		
		repoOrders.save(ordObj);
		
		return "Order Updated";
	}

	
	@PutMapping("updateCart/{cartId}")
	public String updateCart(@PathVariable long cartId,@RequestBody Cart cart) {

		Cart cartObj = repoCart.findById(cartId)
				.orElseThrow(()-> new ResourceNotFound("Cart does not exist with id :" + cartId));
		
		cartObj.setName(cart.getName());
		cartObj.setQuantity(cart.getQuantity());
		cartObj.setPhone(cart.getPhone());
		cartObj.setLink(cart.getLink());
		
		repoCart.save(cart);
		
		return "Cart Updated";
	}

		
}

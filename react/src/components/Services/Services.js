import axios from 'axios';

class Services {

    checkLogin(user){
        return axios.post("http://localhost:8080/users",user);
    }

    addUser(order){
        return axios.post("http://localhost:8080/addUser", order);
    }
    getpro(){
        return axios.get("http://localhost:8080/getAllProducts");
    }

    addCart(cart){
        return axios.post("http://localhost:8080/addCart", cart);
    }
    
    deleteCart(id){
        return axios.delete("http://localhost:8080/deleteCart" + '/' + id);
    }

    getCart(){
        return axios.get("http://localhost:8080/getAllCart");
    }
    
    getCartbyId(id){
        return axios.get("http://localhost:8080/getCartById" + '/' + id);
    }
    
    updateCart(id, order){
        return axios.post("http://localhost:8080/updateCart" + '/'+ id, order );
    }
    addorder(order){
        return axios.post("http://localhost:8080/addOrder", order);
    }
    deletepro(id){
        return axios.delete("http://localhost:8080/deleteProduct" + '/' + id);
    }
    createProduct(product){
        return axios.post("http://localhost:8080/addProduct",product);
    }
    deleteorder(id){
        return axios.delete("http://localhost:8080/deleteOrder" + '/' + id);
    }
    getorders(){
        return axios.get("http://localhost:8080/getAllOrders");
    }
    getOrderbyId(id){
        return axios.get("http://localhost:8080/getOrderById" + '/' + id);
    }
    updateOrder(order,id){
        return axios.put("http://localhost:8080/updateOrder/{orderId}");
    }
}

export default new Services()
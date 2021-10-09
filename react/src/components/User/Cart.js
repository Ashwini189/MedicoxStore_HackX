import React, { Component } from 'react'
import Services from '../Services/Services';

export default class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: []
        }
    }
    deletecart(id) {
        Services.deleteCart(id).then(res => {
            this.setState({ orders: this.state.orders.filter(order => order.id !== id) });
        });
    }
    componentDidMount() {
        Services.getCart().then((res) => {
            this.setState({ orders: res.data });
        });
    }

    book(name,rate,link,quantity,phone){
        let order = {
            "name": name,
            "rate": rate,
            "link": link,
            "quantity": quantity,
            "phone": phone
        }
        console.log('order => ' + JSON.stringify(order));


        Services.addorder(order).then(res => {
           alert('Item placed for delivery succesfully');
           return this.props.history.push('/User/Delivery');
            
        });
    }
    back(){
        return this.props.history.push('/User/Home');
    }

    deliverylist(){
        return this.props.history.push('/User/Delivery');
    }
    updatehandler(id){
        this.props.history.push(`/User/UpdateCart/${id}`);
    }
    render() {
        return (
            <div>
                <h2 className="text-center">MY CART</h2>
                <br></br>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.back.bind(this)}> Home</button>
                    <button className="btn btn-primary" style={{ marginLeft: "940px" }} onClick={this.deliverylist.bind(this)}> Delivery List</button>
                 </div>
                 <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Order</th>
                                <th> Name</th>
                                <th> Rate </th>
                                <th> Quantity</th>
                                <th> Deliver To</th>
                                <th> Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map(
                                        order =>
                                            <tr key={order.id}>
                                                <td> <img src={order.link} width="200" height="100" alt="brand"/> </td>
                                                <td> {order.name} </td>
                                                <td> {order.rate}</td>
                                                <td> {order.quantity}</td>
                                                <td> {order.phone} </td>
                                                <td>
                                                 
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.updatehandler.bind(this)(order.id)} className="btn btn-primary">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.book.bind(this)(order.name,order.rate,order.link,order.quantity,order.phone)} className="btn btn-success">Place Order </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletecart.bind(this)(order.id)} className="btn btn-danger">Delete </button>
                                             </td>
                                            </tr>
                                    )
                                }
                            </tbody>

                    </table>

                </div>

            </div>
        )
    }
}



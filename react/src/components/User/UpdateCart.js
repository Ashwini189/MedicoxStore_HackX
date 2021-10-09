import React, { Component } from 'react'
import Services from '../Services/Services';

class UpdateCart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            rate : '',
            quantity: '',
            phone: '',
            link: ''
        }
        this.changequantityHandler = this.changequantityHandler.bind(this);
        this.changedeliverHandler = this.changedeliverHandler.bind(this);
    }

    componentDidMount(){
        Services.getCartbyId(this.state.id).then( (res) =>{
            let order = res.data;
            this.setState({id: order.id,
                name: order.name,
                rate : order.rate,
                quantity : order.quantity,
                phone: order.phone,
                link: order.link
            });
        });
    }

    UpdateCart = (e) => {
        e.preventDefault();
        let order = {name: this.state.name, rate: this.state.rate, quantity: this.state.quantity, phone: this.state.phone, link: this.state.link};
        console.log('order => ' + JSON.stringify(order));
        console.log('id => ' + JSON.stringify(this.state.id));
       // Services.updateCart(this.state.id,order);
        Services.deleteCart(this.state.id);
        Services.addCart(order).then( res => {
            this.props.history.push('/user/Cart');
        });
    }
    
    changequantityHandler= (event) => {
        this.setState({quantity: event.target.value});
    }

    changedeliverHandler= (event) => {
        this.setState({phone: event.target.value});
    }

    cancel(){
        this.props.history.push('/User/Cart');
    }

    render() {
        return (
            <div>
                <div><h2 className="text-center">UPDATE ORDER </h2><br></br>
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> ID: </label>
                                            <input placeholder="id" name="id" className="form-control" 
                                                value={this.state.id}/> 
                                        </div>
                                        <div className = "form-group">
                                            <label> NAME: </label>
                                            <input placeholder="name" name="name" className="form-control" 
                                                value={this.state.name}/> 
                                        </div>
                                        <div className = "form-group">
                                            <label> RATE: </label>
                                            <input placeholder="rate" name="rate" className="form-control" 
                                                value={this.state.rate}/> 
                                        </div>
                                        <div className = "form-group">
                                            <label> Quantity: </label>
                                            <input placeholder="Quantity" name="quantity" className="form-control" 
                                                value={this.state.quantity} onChange={this.changequantityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Deliver To: </label>
                                            <input placeholder="deliver" name="deliver" className="form-control" 
                                                value={this.state.deliver} onChange={this.changedeliverHandler}/>
                                        </div>

                                        <button className="btn btn-success"  style={{ marginLeft: "340px" }} onClick={this.UpdateCart.bind(this)}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateCart

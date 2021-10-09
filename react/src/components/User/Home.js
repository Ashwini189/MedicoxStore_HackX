import React, { Component } from 'react'
import Services from '../Services/Services';
class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
                products: []
        }
    }

    addtocart(productId,productRate,productLink){
        let order = {
            "name": productId,
            "rate": productRate,
            "link": productLink,
            "quantity": "1",
            "phone": "--"
        }
        console.log('order => ' + JSON.stringify(order));


        Services.addCart(order).then(res => {
           alert('added to cart');
           return this.props.history.push('/User/Cart');
            
        });
    }
    componentDidMount(){
        Services.getpro().then((res) => {
          this.setState({ products: res.data});
        });
    }

    viewcart(){
        return this.props.history.push('/User/Cart');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">WELCOME TO MEDICOX</h2>
                 <div className = "row">
                    <button style={{marginLeft: "1030px"}} className="btn btn-primary" onClick={this.viewcart.bind(this)}> View Cart</button>
                 </div>
                 <br></br>
                 <div className = "row">
                       <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Product </th>
                                    <th> Name</th>
                                    <th> Description</th>
                                    <th> Rate </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        product => 
                                        <tr>
                                             <td> <img src={product.productLink} width="200" height="100" alt="brand"/> </td>
                                             <td>  {product.productName}</td>
                                             <td> {product.productDesc} </td>   
                                             <td> {product.productRate}</td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.addtocart.bind(this)(product.productName,product.productRate,product.productLink)} className="btn btn-success">Add to Cart </button>
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

export default Home

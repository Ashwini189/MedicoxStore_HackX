import React, { Component } from 'react'
import Services from '../Services/Services';
class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
                products: []
        }
    }

    deletepro(productId){
        Services.deletepro(productId).then( res => {
            this.setState({products: this.state.products.filter(product => product.productId !== productId)});
        });
    }
    componentDidMount(){
        Services.getpro().then((res) => {
          this.setState({ products: res.data});
        });
    }

    addProducts(){
        return this.props.history.push('/admin/Addpro');
    }

    viewOrders(){
        return this.props.history.push('/admin/newOrder');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Products List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProducts.bind(this)}> Add Products</button>
                    <button style={{marginLeft: "900px"}} className="btn btn-primary"  onClick={this.viewOrders.bind(this)}> New Orders</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th> Product Name</th>
                                    <th> Product Rate</th>
                                    <th> Product Pic</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        product => 
                                        <tr>
                                             <td>  {product.productId}</td>
                                             <td> {product.productName} </td>   
                                             <td> {product.productRate}</td>
                                             <td> <img src={product.productLink} width="200" height="100" alt="brand"/> </td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletepro.bind(this)(product.productId)} className="btn btn-danger">Delete </button>
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

export default Products

import React, { Component } from 'react'
import Services from '../Services/Services';

export default class newOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: []
        }
    }
    deleteorder(id) {
        Services.deleteorder(id).then(res => {
            this.setState({ orders: this.state.orders.filter(order => order.id !== id) });
        });
    }
    componentDidMount() {
        Services.getorders().then((res) => {
            this.setState({ orders: res.data });
        });
    }
    back(){
        return this.props.history.push('/admin/Products');
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Orders List</h2>
                <br></br>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.back.bind(this)}> Back</button>
                 </div>
                 <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Order Name</th>
                                <th> Rate</th>
                                <th> Quantity</th>
                                <th> Deliver to</th>
                                <th> Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map(
                                        order =>
                                            <tr>
                                                <td> {order.name} </td>
                                                <td> {order.rate}</td>
                                                <td>{order.quantity}</td>
                                                <td>{order.phone}</td>
                                                <td>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteorder.bind(this)(order.id)} className="btn btn-danger">Delete </button>
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



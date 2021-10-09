import React, { Component } from 'react'
import Services from '../Services/Services';
class Delivery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        Services.getorders().then((res) => {
            this.setState({ orders: res.data /*.filter(order => order.phone === phone) */ });
        });
    }

    back(){
        return this.props.history.push('/User/Home');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Delivery List</h2>
                <br></br>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.back.bind(this)}> Home</button>
                 </div>
                 <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Order ID</th>
                                <th> Order Name</th>
                                <th> Product Rate</th>
                                <th> Quantity</th>
                                <th> Deliver To</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.orders.map(
                                    order =>
                                        <tr>
                                            <td>{order.id}</td>
                                            <td> {order.name} </td>
                                            <td> {order.rate}</td>
                                            <td> {order.quantity} </td>
                                            <td> {order.phone}</td>
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

export default Delivery

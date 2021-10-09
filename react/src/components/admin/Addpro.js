import React, { Component } from 'react'
import Services from '../Services/Services';

class Addpro extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productName: '',
            productRate: '',
            productDesc: '',
            productLink: ''
        }
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeLinkHandler=this.changeLinkHandler.bind(this);
        this.changeRateHandler=this.changeRateHandler.bind(this);
        this.changeDesHandler=this.changeDesHandler.bind(this);
        this.save=this.save.bind(this);
    }

    save = (e) => {
        e.preventDefault();
        let product = {
            "productName": this.state.productName,
            "productRate": this.state.productRate,
            "productDesc": this.state.productDesc,
            "productLink": this.state.productLink
        }
        console.log('product => ' + JSON.stringify(product));


        Services.createProduct(product).then(res => {
           alert('successfully added');
           return this.props.history.push('/admin/Products');
            
        });
    }

    changeNameHandler = (event) => {
        this.setState({ productName: event.target.value });
    }

    changeRateHandler = (event) => {
        this.setState({ productRate: event.target.value });
    }

    changeDesHandler = (event) => {
        this.setState({ productDesc: event.target.value });
    }

    changeLinkHandler = (event) => {
        this.setState({ productLink: event.target.value });
    }
    cancel() {
        this.props.history.push('/admin/Products');
    }
    render() {
        return (
            <div>
                <div><h2 className="text-center">Add Product</h2><br></br>
                    <div className="row"> 
                        <div className="card col-md-6 offset-md-3 offset-md-3">

                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Name: </label>
                                        <input placeholder="Name" name="name" className="form-control"
                                            value={this.state.productName} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Rate: </label>
                                        <input placeholder="Rate" name="rate" className="form-control"
                                            value={this.state.productRate} onChange={this.changeRateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Description: </label>
                                        <input placeholder="Description" name="des" className="form-control"
                                            value={this.state.productDesc} onChange={this.changeDesHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Product Link: </label>
                                        <input placeholder="Product Pic Link" name="link" className="form-control"
                                            value={this.state.productLink} onChange={this.changeLinkHandler} />
                                    </div>

                                    <button className="btn btn-success" style={{ marginLeft: "340px" }} onClick={this.save}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Addpro

import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import Products from './components/admin/Products';
import newOrder from '../src/components/admin/newOrder';
import Addpro from './components/admin/Addpro';
import Cart from '../src/components/User/Cart';
import Updatecart from '../src/components/User/UpdateCart';
import Delivery from '../src/components/User/Delivery';
import Home from '../src/components/User/Home';
import ChatBot from '../src/components/ChatBot';

export default function App() {

    const heading = "Welcome to Medicox";
    const quote = "Always laugh when you can, it is cheapest medicine.";
    const footer = "Lord Byron";

    return (
        <Router>
            <NavigationBar />
            <Container>
                <Row>
                    <Col lg={12} className={"margin-top"}>
                        <Switch>
                            <Route path="/" exact component={() => <Welcome heading={heading} quote={quote} footer={footer} />} />
                            <Route path="/register" exact component={Register} />
                            <Route path="/login" exact component={Login} />
                            <Route path = "/admin/newOrder" exact component={newOrder}></Route>
                            <Route path="/admin/Addpro" exact component={Addpro}></Route>
                            <Route path="/admin/Products" component={Products}></Route>
                            <Route path="/User/Home" exact component={Home}></Route>
                            <Route path="/User/Cart" exact component={Cart}></Route>
                            <Route path="/User/UpdateCart/:id" exact component={Updatecart}></Route>
                            <Route path="/User/Delivery" exact component={Delivery}></Route>
                            <Route path="/ChatBot" exact component={ChatBot}></Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Router>
    );
}

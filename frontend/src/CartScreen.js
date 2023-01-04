import React, { useContext } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { CartContext } from './Context/CartContext';
import { ListGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash } from './Icons';
import axios from 'axios';

const CartScreen = () => {
    const { state, dispatch } = useContext(CartContext);
    const navigate = useNavigate();
    const updateCartHandler = async (item, quantity) => {
        const { data } = await axios.get(`/api/products/${item._id}`)
        if (data.cartinStock < quantity) {
            alert("Sorry, Product is Out of Stock");
            return;
        }
        dispatch({ type: "ADD_TO_CART", payload: { ...item, quantity } });
    }
    const removeItemhandler =(item)=>{
        dispatch({ type: "REMOVE_FROM_CART", payload: item });
    }
    const checkouthandler = () =>{
        navigate('/signin?redirect=/shipping')
    }
    return (
        <Container>
            <h1>Shopping Cart</h1>
            <Row>
                <Col md={8}>
                    {state.cart.cartItems.length == 0 ? <div>
                        <span>Cart is Empty, <Link to={"/"}>Go Shopping</Link>  </span>
                    </div> : <ListGroup>
                        {state.cart.cartItems.map((item) => (
                            <ListGroup.Item key={item._id}>
                                <Row className='align-items-center'>
                                    <Col md={4}>
                                        <img src={item.image} alt={item.name} className="img-fluid rounded img-thumbnail"></img>
                                        <Link to={`/product/${item.slug}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={3}>
                                        <Button onClick={() => {
                                            updateCartHandler(item, item.quantity - 1)
                                        }} variant='light' disabled={item.quantity === 1}>

                                            <Minus />
                                        </Button>
                                        <span>{item.quantity}</span>
                                        <Button onClick={() => {
                                            updateCartHandler(item, item.quantity + 1)
                                        }} variant='light' disabled={item.quantity === item.countInStock}>
                                            <Plus />
                                        </Button>
                                    </Col>
                                    <Col md={3}>
                                        {item.price}
                                    </Col>
                                    <Col md={2}>
                                        <Button onClick={() => {
                                            removeItemhandler(item)
                                        }} variant='light' >
                                            <Trash />
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>}
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3>
                                        SubTotal({state.cart.cartItems.reduce((a, c) => a + c.quantity, 0)} Items) : ${state.cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                                    </h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className='d-grid'>
                                        <Button type='button' onClick={checkouthandler} disabled={state.cart.cartItems.length === 0}>Proceed To Checkout</Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CartScreen;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Rating from './RatingComponent';
import { CartContext } from './Context/CartContext';
import axios from 'axios';

const Product = ({ product }) => {
    const cartContextValue = useContext(CartContext)
    const addToCart = async (productItem) => {
        const existingItem = cartContextValue.state.cart.cartItems.find(item => item._id == productItem._id);
        const quantity = existingItem ? existingItem.quantity + 1 : 1;
        const data = await axios.get(`/api/products/${productItem._id}`);
        if (data.countInStock < quantity) {
            window.alert("Sorry, Product is Out of Stock");
            return;
        }
        cartContextValue.dispatch({ type: "ADD_TO_CART", payload: { ...productItem, quantity: quantity } });
    }

    return (
        <Col sm={6} md={4} lg={3} className="mb-3" >
            <Card className="product" >
                <Link to={`/product/${product.slug}`}>
                    <img src={product.image} className="card-img-top" alt={product.name} />
                </Link>
                <Card.Body>
                    <Link to={`/product/${product.slug}`}>
                        <Card.Title>{product.name}</Card.Title>
                    </Link>
                    <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                    <Card.Text><b>${product.price}</b></Card.Text>
                    <Button onClick={()=>addToCart(product)}>Add to cart</Button >
                </Card.Body>
            </Card>
        </Col>
    );
};
Product.propTypes = {
    product: PropTypes.any
}
export default Product;
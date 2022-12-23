import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Rating from './RatingComponent';

const Product = ({ product }) => {
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
                    <Button>Add to cart</Button >
                </Card.Body>
            </Card>
        </Col>
    );
};
Product.propTypes = {
    product: PropTypes.any
}
export default Product;
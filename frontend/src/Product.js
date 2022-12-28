import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { Badge, Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { CartContext } from './Context/CartContext';
import Rating from './RatingComponent';
import { productReducer } from './reducer';

const Product = () => {
    const { slug } = useParams();
    const [state, dispatch] = useReducer(productReducer, {
        product: [],
        loading: false,
        error: ''
    });
    const cartContextValue = useContext(CartContext);
    const fetchData = async () => {
        dispatch({ type: 'FETCH_REQUEST' });
        try {
            const result = await axios.get(`/api/products/slug/${slug}`);
            dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        }
        catch (e) {
            dispatch({ type: 'FETCH_FAIL', payload: e.message });
        }
    };
    useEffect(() => {
        fetchData();
    }, [slug]);

    const addToCart = () => {
        cartContextValue.dispatch({type:"ADD_TO_CART",payload:{...state.product,quantity:1}})
    }
    return (
        <Container className='p-2'>
            {state.loading ? <div>loading...</div> :
                state.error ? <div></div> :
                    <div>
                        <Row>
                            <Col md={5}>
                                <img
                                    className='img-large'
                                    src={state.product.image}
                                    alt={state.product.name} />
                            </Col>
                            <Col md={3}>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <h1>{state.product.name}</h1>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Rating rating={state.product.rating} numReviews={state.product.numReviews}></Rating>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <h5>Price   :  ${state.product.price}</h5>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <h5>Description   :  ${state.product.description}</h5>
                                    </ListGroup.Item>
                                </ListGroup>

                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <ListGroup>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Price :</Col>
                                                    <Col>{state.product.price}</Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Status :</Col>
                                                    <Col>{state.product.countInStock > 0 ? <Badge bg='success'>In Stock</Badge> : <Badge bg='danger'>Unavailable</Badge>}</Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row >
                                                    <Col className='d-flex justify-content-center'>{state.product.countInStock > 0 && <Button onClick={addToCart} variant='primary'>Add to Cart</Button>}</Col>
                                                </Row>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>}
        </Container>
    );
};

export default Product;
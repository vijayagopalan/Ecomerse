import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SigninScreen = () => {
    const {search} = useLocation();
    const redirectUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectUrl ? redirectUrl : "/"
    return (
        <Container className='small-container'>
            <h1>Sign In</h1>
            <Form>
                <Form.Group controlId='email' className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' required></Form.Control>
                </Form.Group>
                <Form.Group controlId='password' className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' required></Form.Control>
                </Form.Group>
                <div className='mb-3'>
                    <Button type='submit'>Sign In</Button>
                </div>
                <div className='mb-3'>
                    New Customer?  <Link to={`/signup?redirect=${redirect}`}>Create an Account</Link> 
                </div>
            </Form>
        </Container>
    );
};

export default SigninScreen;
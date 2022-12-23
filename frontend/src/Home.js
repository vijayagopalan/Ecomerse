import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import reducer from './reducer';
import Product from './ProductComponent';

const Home = () => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    loading: false,
    error: ''
  });
  const fetchData = async () => {
    dispatch({ type: 'FETCH_REQUEST' });
    try {
      const result = await axios.get('/api/products');
      dispatch({ type: 'FETCH_SUCCESS', payload: result.data });

    }
    catch (e) {
      dispatch({ type: 'FETCH_FAIL', payload: e.message });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {
          state.loading ?
            <div>loading</div> :
            state.error ? <div>{state.error}</div> :
              <Row >
                {
                  state.products.map(product => (
                    <Product key={product.slug} product={product}></Product>
                  ))
                }
              </Row>

        }
      </div>
    </div>
  );
};

export default Home;
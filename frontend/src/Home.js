import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import reducer from './reducer';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    loading: false,
    error: ''
  });
  // const [products, setProducts] = useState([]);
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
              state.products.map(product => (
                <div className="product" key={product.slug}>
                  <Link to={`/product/${product.slug}`}>
                    <img src={product.image} alt={product.name} />
                  </Link>
                  <div className="product-info">
                    <Link to={`/product/${product.slug}`}>
                      <p>{product.name}</p>
                    </Link>
                    <p><b>${product.price}</b></p>
                    <button>Add to cart</button>
                  </div>
                </div>
              ))
        }
      </div>
    </div>
  );
};

export default Home;
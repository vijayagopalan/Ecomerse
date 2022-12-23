import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const {slug} = useParams();
    return (
        <div>
            <p>{slug}</p>
        </div>
    );
};

export default Product;
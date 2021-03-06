import React from 'react';
import style from './ProductDetail.css';
import fakeData from '../../fakeData';


const ProductDetail = () => {
    const {productKey} = useParams
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);
    return (
        <div>
            <h1>Product detail coming soon.........</h1>
        </div>
    );
};

export default ProductDetail;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetail = ({ product }) => {
    return (
        <div className="card m-1" style={{width: "20rem"}}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={product.image} className="card-img-top mt-1" alt={product.name} style={{ width: '180px', height: '200px' }} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}</p>
                <p className="card-text">{product.sku}</p>
                <p className="card-text">{product.quantity}</p>
            </div>
        </div>
    );
}

export default ProductDetail;
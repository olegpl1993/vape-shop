import React from 'react';
import './disposable.scss';
import data from '../../data/database';
import ProductCard from '../../components/productCard/productCard';

function Disposable() {
  const { products } = data;
  return (
    <div className="disposable">
      <div className="productsBox">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            id={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Disposable;

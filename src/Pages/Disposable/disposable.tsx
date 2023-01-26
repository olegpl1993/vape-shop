import React from 'react';
import './disposable.scss';
import data from '../../data/database';
import ProductCard from '../../components/productCard/productCard';

function Disposable() {
  const { disposable } = data;
  return (
    <div className="disposable">
      <div className="productsBox">
        {disposable.map((product, index) => <ProductCard id={index} />)}
      </div>
    </div>
  );
}

export default Disposable;

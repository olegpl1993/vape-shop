import React from 'react';
import './disposable.scss';
import data from '../../data/database';
import ProductCard from '../../components/productCard/productCard';

interface Props {
  addProductToCart: (id: number) => void;
}

function Disposable(props: Props) {
  const { addProductToCart } = props;
  const { products } = data;
  return (
    <div className="disposable">
      <div className="productsBox">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            id={index}
            addProductToCart={addProductToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Disposable;

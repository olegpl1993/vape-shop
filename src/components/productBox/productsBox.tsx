/* eslint-disable no-underscore-dangle */
import React from 'react';
import './productsBox.scss';
import ProductCard from '../productCard/productCard';
import { Product } from '../../types';
import LoadingSpinner from '../Spinner/LoadingSpinner';

interface Props {
  products: Product[]
}

function ProductsBox(props: Props) {
  const { products } = props;

  if (products.length === 0) {
    return (
      <div className="disposable">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div className="productsBox">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductsBox;

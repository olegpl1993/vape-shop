/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import './disposable.scss';
import ProductCard from '../../components/productCard/productCard';
import { Product } from '../../types';

function Disposable() {
  const [products, setProducts] = useState<Product[]>([]);
  console.log('products = ', products);

  useEffect(() => {
    const api = async () => {
      const url = 'https://vape-shop-api.glitch.me/api/products';
      const res = await fetch(url);
      const datas: Product[] = await res.json();
      setProducts(datas);
    };
    api();
  }, []);

  return (
    <div className="disposable">
      <div className="productsBox">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Disposable;

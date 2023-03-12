import React, { useEffect, useState } from 'react';
import './disposable.scss';
import data from '../../data/database';
import ProductCard from '../../components/productCard/productCard';
import { Product } from '../../types';

function Disposable() {
  const [result, setResult] = useState<Product[]>([]);
  console.log('products = ', result);

  useEffect(() => {
    const api = async () => {
      const url = 'https://vape-shop-api.glitch.me/api/products';
      const res = await fetch(url);
      const datas: Product[] = await res.json();
      setResult(datas);
    };
    api();
  }, []);

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

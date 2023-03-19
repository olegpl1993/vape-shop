/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import './Products.scss';
import { Product } from '../../types';
import ProductsBox from '../../components/productBox/productsBox';
import { useAppSelector } from '../../hook';

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [renderProducts, setRenderProducts] = useState<Product[]>(products);

  const categoryState = useAppSelector((state) => state.category.category);

  const filterProducts = (searchText: string) => {
    const searchName = products.filter(
      (el) => el.category?.toLowerCase().includes(searchText.toLowerCase()),
    );
    const tempState = Array.from(new Set(
      [...searchName],
    ));
    setRenderProducts(tempState);
  };

  useEffect(() => {
    const api = async () => {
      const url = 'https://vape-shop-api.glitch.me/api/products';
      const res = await fetch(url);
      const data: Product[] = await res.json();
      setProducts(data);
    };
    api();
  }, []);

  useEffect(() => {
    if (products.length > 0) filterProducts(categoryState);
  }, [products, categoryState]);

  return (
    <div className="disposable">
      <ProductsBox products={renderProducts} />
    </div>
  );
}

export default Products;

import React, { useEffect, useState } from 'react';
import ProductsBox from '../../components/productBox/productsBox';
import { Product } from '../../types';

function Equipment() {
  const [products, setProducts] = useState<Product[]>([]);
  const [renderProducts, setRenderProducts] = useState<Product[]>(products);

  const filterProducts = (searchText: string) => {
    const searchName = products.filter(
      (el) => el.category?.toLowerCase().includes(searchText.toLowerCase()),
    );
    const tempState = Array.from(new Set([...searchName]));
    setRenderProducts(tempState);
  };

  useEffect(() => {
    const api = async () => {
      const url = 'https://vape-shop-api.glitch.me/api/products';
      const res = await fetch(url);
      const datas: Product[] = await res.json();
      setProducts(datas);
    };
    api();
  }, []);

  useEffect(() => {
    if (products.length > 0) filterProducts('equipment');
  }, [products]);

  return (
    <div className="disposable">
      <ProductsBox products={renderProducts} />
    </div>
  );
}

export default Equipment;

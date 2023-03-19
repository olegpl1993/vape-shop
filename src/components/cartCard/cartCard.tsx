/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useState } from 'react';
import { Product } from '../../types';
import './cartCard.scss';

interface Props {
  elementNumber: number;
  productInCart: {
    id: string;
    number: number;
  };
}

function CartCard(props: Props) {
  const { productInCart } = props;
  const { elementNumber } = props;
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const api = async () => {
      const url = `https://vape-shop-api.glitch.me/api/products/${productInCart.id}`;
      const res = await fetch(url);
      const data: Product = await res.json();
      setProduct(data);
    };
    api();
  }, []);

  if (!product) {
    return null;
  }
  return (
    <div className="cartCard">
      <div className="elementNumber">{elementNumber + 1}</div>
      <div className="imgBox">
        <img
          className="image"
          src={`https://vape-shop-api.glitch.me/img/${product.images}`}
          alt={product.title}
        />
      </div>
      <div className="descriptionCol">
        <div className="title">{product.title}</div>
        <div className="description">{product.description}</div>
      </div>
      <div className="numberCol">
        <div className="stock">{`В наличии: ${product.stock} шт`}</div>
        <div className="numberRow">
          <button className="button" type="button">
            +
          </button>
          <div className="number">{`${productInCart.number}`}</div>
          <button className="button" type="button">
            -
          </button>
        </div>
        <div className="price">
          {`${product.price * productInCart.number} грн`}
        </div>
      </div>
    </div>
  );
}

export default CartCard;

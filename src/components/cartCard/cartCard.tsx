import React from 'react';
import './cartCard.scss';
import data from '../../data/database';

function CartCard({ id, elementNumber, cartState }:
  { id: number, elementNumber: number, cartState: { id: number, number: number }[] }) {
  const { products } = data;
  const product = products[id];
  return (
    <div className="cartCard">
      <div className="elementNumber">{elementNumber + 1}</div>
      <div className="imgBox">
        <img className="image" src={product.images[0]} alt={product.title} />
      </div>
      <div className="descriptionCol">
        <div className="title">{product.title}</div>
        <div className="description">{product.description}</div>
      </div>
      <div className="numberCol">
        <div className="stock">{`В наличии: ${product.stock} шт`}</div>
        <div className="numberRow">
          <button className="button" type="button">+</button>
          <div className="number">{`${cartState[elementNumber].number}`}</div>
          <button className="button" type="button">-</button>
        </div>
        <div className="price">{`${product.price * cartState[elementNumber].number} грн`}</div>
      </div>
    </div>
  );
}

export default CartCard;

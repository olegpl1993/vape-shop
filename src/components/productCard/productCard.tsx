import React from 'react';
import './productCard.scss';
import data from '../../data/database';

interface Props {
  id: number,
  addProductToCart: (id: number) => void;
}

function ProductCard(props: Props) {
  const { id, addProductToCart } = props;
  const { products } = data;
  const product = products[id];
  return (
    <div className="productCard">
      <div className="imgBox">
        <img className="image" src={product.images[0]} alt={product.title} />
      </div>
      <div className="title">{product.title}</div>
      <div className="row">
        <div className="price">{`${product.price} грн`}</div>
        {product.stock > 0
          ? <div className="stock">{`В наличии ${product.stock} шт`}</div>
          : <div className="nostock">Нет в наличии</div>}
      </div>
      <button className="addToCartBtn" type="button" onClick={() => { addProductToCart(id); }}>Добавить в корзину</button>
    </div>
  );
}

export default ProductCard;

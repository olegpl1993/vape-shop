import React from 'react';
import './productCard.scss';
import data from '../../data/database';
import { useAppDispatch, useAppSelector } from '../../hook';
import { changeCart } from '../../store/cartSlice';

interface Props {
  id: number,
}

function ProductCard(props: Props) {
  const { id } = props;
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  const addProductToCart = (idProd: number) => {
    const prodIndex = cart.findIndex((el) => el.id === idProd);
    if (prodIndex >= 0) {
      const tempCart = [...cart];
      tempCart[prodIndex] = { id: idProd, number: tempCart[prodIndex].number + 1 };
      dispatch(changeCart(tempCart));
    } else {
      dispatch(changeCart([...cart, { id: idProd, number: 1 }]));
    }
  };

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

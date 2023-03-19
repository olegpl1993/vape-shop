import React from 'react';
import './cart.scss';
import CartCard from '../../components/cartCard/cartCard';
import { useAppSelector } from '../../hook';

function Cart() {
  const cart = useAppSelector((state) => state.cart.cart);

  if (cart.length === 0) {
    return (
      <div className="cart">Корзина пустая</div>
    );
  }
  return (
    <div className="cart">
      <div className="productsBox">
        {cart.map((productInCart, index) => (
          <CartCard key={productInCart.id} elementNumber={index} productInCart={productInCart} />
        ))}
      </div>
    </div>
  );
}

export default Cart;

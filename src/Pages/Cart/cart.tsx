import React from 'react';
import './cart.scss';
import CartCard from '../../components/cartCard/cartCard';
import { useAppSelector } from '../../hook';

function Cart() {
  const cart = useAppSelector(
    (state) => state.cart.cart,
  );
  return (
    <div className="cart">
      <div className="productsBox">
        {cart.map(
          (product, index) => (
            <CartCard
              key={product.id}
              id={product.id}
              elementNumber={index}
              cartState={cart}
            />
          ),
        )}
      </div>
    </div>
  );
}

export default Cart;

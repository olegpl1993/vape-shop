import React from 'react';
import './cart.scss';
import CartCard from '../../components/cartCard/cartCard';

function Cart({ cartState }: { cartState: { id: number, number: number }[] }) {
  console.log(cartState);
  return (
    <div className="cart">
      <div className="productsBox">
        {cartState.map(
          (product, index) => (
            <CartCard
              key={product.id}
              id={product.id}
              elementNumber={index}
              cartState={cartState}
            />
          ),
        )}
      </div>
    </div>
  );
}

export default Cart;

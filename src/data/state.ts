import { useState } from 'react';

export const [cartState, setCartState] = useState([
  { id: 2, number: 1 },
  { id: 3, number: 2 },
  { id: 7, number: 1 },
]);

/*
// калбек получает пост из компонента и добавляет в стейт
const addProductToCartState = (productId: number) => {
  setCartState([...cartState, { id: productId, number: 1 }]);
};
*/

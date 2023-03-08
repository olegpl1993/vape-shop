import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartElem } from '../types';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [
      { id: 2, number: 1 },
      { id: 3, number: 2 },
      { id: 7, number: 1 },
    ],
  },
  reducers: {
    changeCart(state, action: PayloadAction<CartElem[]>) {
      // eslint-disable-next-line no-param-reassign
      state.cart = action.payload;
    },
  },
});

export const { changeCart } = cartSlice.actions;
export default cartSlice.reducer;

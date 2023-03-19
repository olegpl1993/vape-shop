import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartElem, CartState } from '../types';

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCart(state, action: PayloadAction<CartElem[]>) {
      // eslint-disable-next-line no-param-reassign
      state.cart = action.payload;
    },
  },
});

export const { changeCart } = cartSlice.actions;
export default cartSlice.reducer;

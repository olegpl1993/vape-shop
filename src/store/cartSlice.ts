import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartElem } from '../types';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [
      { id: '640e34b41169913ea4784064', number: 1 },
      { id: '640e351b1169913ea4784066', number: 2 },
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

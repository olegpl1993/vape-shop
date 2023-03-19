import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category: '',
  },
  reducers: {
    changeCategory(state, action: PayloadAction<string>) {
      // eslint-disable-next-line no-param-reassign
      state.category = action.payload;
    },
  },
});

export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;

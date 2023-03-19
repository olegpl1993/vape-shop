import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import cartReducer from './cartSlice';
import categoryReducer from './categorySlice';

const store = configureStore({
  reducer: {
    language: languageReducer,
    cart: cartReducer,
    category: categoryReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

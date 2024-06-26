import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterReducer";
import products from "./products";

const store = configureStore({
  reducer: {
    [products.reducerPath]: products.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(products.middleware),
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shopSlice";
import cartReducer from "../features/cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { shopApi } from "../services/shopService";

const store = configureStore({
  reducer: {
    shopReducer,
    cartReducer,
    [shopApi.reducerPath]: shopApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware)
})

setupListeners(store.dispatch)

export default store
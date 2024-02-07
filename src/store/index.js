import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { shopApi } from "../services/shopService";
import { authApi } from "../services/authService";
import { ordersApi } from "../services/ordersService";
import shopReducer from "../features/shopSlice";
import authReducer from "../features/authSlice";
import cartReducer from "../features/cartSlice";
import orderReducer from "../features/orderSlice";

const store = configureStore({
  reducer: {
    shopReducer,
    cartReducer,
    authReducer,
    orderReducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware).concat(ordersApi.middleware).concat(authApi.middleware)
})

setupListeners(store.dispatch);

export default store
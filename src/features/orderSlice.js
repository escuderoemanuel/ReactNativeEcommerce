import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],

  },
  reducers: {
    setLocalOrder: (state, action) => {
      state.orders = action.payload;
      state.cartItems = [];
      state.total = 0;
      state.localId = null;
      state.createdAt = null;
    }
  }
})

export const { setLocalOrder } = orderSlice.actions;
export default orderSlice.reducer;
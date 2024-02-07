import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],

  },
  reducers: {
    setLocalOrders: (state, action) => {
      state.orders = action.payload
    },
    clearLocalOrders: (state) => {
      state.orders = []
    }
  }
})

export const { setLocalOrders, clearLocalOrders } = orderSlice.actions;
export default orderSlice.reducer;
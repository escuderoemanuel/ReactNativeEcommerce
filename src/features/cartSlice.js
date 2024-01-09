import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    user: 'UserLogged',
    updatedAt: Date.now().toLocaleString(),
    total: 0,
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const isProductCart = state.items.find(item => item.id === action.payload.id);
      if (!isProductCart) {
        state.items.push(action.payload);
      } else {
        state.items = state.items.map(item => {
          if (item.id === action.payload.id) {
            item.quantity += action.payload.quantity;
          }
          return item;
        });
      }

      state.total = state.items.reduce((accumulator, currentItem) => accumulator += currentItem.price * currentItem.quantity, 0);
      state.updatedAt = Date.now().toLocaleString();
    },

    removeItem: (state, action) => {
      const indexToRemove = state.items.findIndex(item => item.id === action.payload.id);

      if (indexToRemove !== -1) {
        const updateItems = [...state.items];
        updateItems.splice(indexToRemove, 1);

        state.items = updateItems;
        state.total = state.items.reduce((accumulator, currentItem) => accumulator += currentItem.price * currentItem.quantity, 0);
        state.updatedAt = Date.now().toLocaleString();
        //console.log(`Producto con id: ${indexToRemove} eliminado`)
      }
    },

    clearCart: (state, action) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

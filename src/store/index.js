import { configureStore } from '@reduxjs/toolkit';
import shopReducer from '../features/shopSlice';

export default configureStore({
  reducer: { shopReducer }
})

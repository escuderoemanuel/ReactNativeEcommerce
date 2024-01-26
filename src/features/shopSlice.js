import { createSlice } from "@reduxjs/toolkit";
import categories_data from "../data/categories_data.json"
import products_data from "../data/products_data.json"

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    categorySelected: "",
    productIdSelected: 0,
    productSelected: {},
    categories: categories_data, //! Revisar si aquí está bien tener esto hardcodeado!
    products: products_data, //! Revisar si aquí está bien tener esto hardcodeado!
    productsFilteredByCategory: []
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload
      state.productsFilteredByCategory = state.products.filter(product => product.category === state.categorySelected)
    },
    setProductIdSelected: (state, action) => {
      state.productIdSelected = action.payload
    },
    setProductSelected: (state) => {
      state.productSelected = state.products.find(product => product.id === state.productIdSelected)
    }
  }
})

export const { setCategorySelected, setProductIdSelected, setProductSelected } = shopSlice.actions

export default shopSlice.reducer
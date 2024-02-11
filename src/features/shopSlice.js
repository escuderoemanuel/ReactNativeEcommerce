import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    categorySelected: "",
    productIdSelected: 0,
    productSelected: {},
    categories: [],
    products: [],
    productsFilteredByCategory: [],
    categoryThumbnails: []
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
    },
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setCategories: (state, action) => {
      state.category = action.payload
    },
    setCategoryThumbnails: (state, action) => {
      state.categoryThumbnails = action.payload
    }
  }
})

export const { setCategorySelected, setProductIdSelected, setProductSelected, setProducts, setCategories, setCategoryThumbnails } = shopSlice.actions

export default shopSlice.reducer
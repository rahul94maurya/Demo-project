import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    product: [{ name: "rahul", desription: "this is it", price: 34, id: 0 }],
    counter: 1,
  },
  reducers: {
    addProduct(state, action) {
      state.product.push(action.payload);
      state.counter++;
    },
    deleteProduct(state, action) {
      const index = state.product.findIndex((ele) => ele.id === action.payload);
      state.product.splice(index, 1);
      return state;
    },
    updateProduct(state, action) {
      const index = state.product.findIndex(
        (ele) => ele.id === action.payload.id
      );
      state.product.splice(index, 1, action.payload.product);
      return state;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;

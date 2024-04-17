import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], showCart: false },
  reducers: {
    addItem: (state, action) => {
      const existItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existItem) {
        existItem.quantity++;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const existItem = state.cart.find((item) => item.id === action.payload);
      if (existItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.title !== action.payload);
      } else {
        existItem.quantity--;
      }
    },
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

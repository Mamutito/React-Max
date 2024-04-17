import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], showCart: false },
  reducers: {
    addItem: (state, action) => {
      const existItem = state.cart.findIndex(
        (item) => item.title === action.payload.title
      );

      if (existItem === -1) {
        state.cart.push(action.payload);
      } else {
        state.cart[existItem].quantity++;
      }
    },
    removeItem: (state, action) => {
      const existItem = state.cart.findIndex(
        (item) => item.title === action.payload
      );
      if (state.cart[existItem].quantity <= 1) {
        const filteredCart = state.cart.filter(
          (item) => item.title !== action.payload
        );
        state.cart = filteredCart;
      } else {
        state.cart[existItem].quantity--;
      }
    },
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    showCart: false,
    notification: null,
    changed: false,
  },
  reducers: {
    replaceCart: (state, action) => {
      state.cart = action.payload || [];
    },
    addItem: (state, action) => {
      const existItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      state.changed = true;
      if (existItem) {
        existItem.quantity++;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const existItem = state.cart.find((item) => item.id === action.payload);

      state.changed = true;
      if (existItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      } else {
        existItem.quantity--;
      }
    },
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
    showNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default cartSlice;

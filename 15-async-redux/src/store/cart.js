import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], showCart: false, notification: null },
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
    showNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data...",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-redux-45cff-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

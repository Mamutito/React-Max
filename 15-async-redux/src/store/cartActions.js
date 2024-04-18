import cartSlice from "./cart";
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      const response = await fetch(
        "https://react-redux-45cff-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Fetching cart data failed");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cart = await fetchRequest();
      dispatch(cartActions.replaceCart(cart));
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

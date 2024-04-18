import cartReducer from "./cart";

import { configureStore } from "@reduxjs/toolkit";

const cartStore = configureStore({ reducer: cartReducer.reducer });

export default cartStore;

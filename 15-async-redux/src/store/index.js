import cartReducer from "./cart";

import { configureStore } from "@reduxjs/toolkit";

const cartStore = configureStore({ reducer: cartReducer });

export default cartStore;

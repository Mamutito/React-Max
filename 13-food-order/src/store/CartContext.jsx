import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});
const cartReducer = (state, action) => {
  const updatedItems = [...state.items];
  let existingCartIndex;
  switch (action.type) {
    case "ADD_ITEM":
      existingCartIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      if (existingCartIndex > -1) {
        const existingItem = state.items[existingCartIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingCartIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.item, quantity: 1 });
      }

      return { ...state, items: updatedItems };
    case "REMOVE_ITEM":
      existingCartIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingCartIndex];

      if (existingItem.quantity === 1) {
        updatedItems.splice(existingCartIndex, 1);
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems[existingCartIndex] = updatedItem;
      }
      return { ...state, items: updatedItems };
    default:
      return state;
  }
};

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };

  const cartCtx = {
    items: cart.items,
    addItem,
    removeItem,
  };
  return (
    <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
  );
}

export default CartContext;

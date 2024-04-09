import React, { useContext } from "react";
import CartContext from "../store/CartContext";

function CartItem({ item }) {
  const { addItem, removeItem } = useContext(CartContext);

  return (
    <li className="cart-item">
      <p>{item.name}</p>
      <p className="cart-item-actions">
        <button onClick={() => removeItem(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => addItem(item)}>+</button>
      </p>
    </li>
  );
}

export default CartItem;

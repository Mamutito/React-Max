import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./Modal";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../utils/formattingCurrency";

function Cart() {
  const { items } = useContext(CartContext);
  const { progress, hideCart } = useContext(UserProgressContext);

  const cartTotal = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  const handleClose = () => {
    hideCart();
  };
  return (
    <Modal open={progress === "cart"}>
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p className="cart-item-actions">
                <button>-</button>
                <span>{item.quantity}</span>
                <button>+</button>
              </p>
            </li>
          ))}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
          <button className="text-button" onClick={handleClose}>
            Close
          </button>
          <button className="button">Go to checkout</button>
        </p>
      </div>
    </Modal>
  );
}

export default Cart;

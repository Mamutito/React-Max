import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./Modal";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../utils/formattingCurrency";
import CartItem from "./CartItem";

function Cart() {
  const { items } = useContext(CartContext);
  const { progress, hideCart, showCheckout } = useContext(UserProgressContext);

  const cartTotal = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  const handleClose = () => {
    hideCart();
  };

  const handleGoToCheckout = () => {
    showCheckout();
  };

  return (
    <Modal
      open={progress === "cart"}
      onClose={progress === "cart" ? handleClose : null}
    >
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
          <button className="text-button" onClick={handleClose}>
            Close
          </button>
          <button className="button" onClick={handleGoToCheckout}>
            Go to checkout
          </button>
        </p>
      </div>
    </Modal>
  );
}

export default Cart;

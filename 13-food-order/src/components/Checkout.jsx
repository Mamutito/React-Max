import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./Modal";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../utils/formattingCurrency";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
function Checkout() {
  const { items, clearCart } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(UserProgressContext);
  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  const cartTotal = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  const handleClose = () => {
    hideCheckout();
  };

  function handleFinish() {
    hideCheckout();
    clearCart();
    clearData();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: items,
          customer: customerData,
        },
      })
    );
  };
  let actions = (
    <>
      <button type="button" className="text-button" onClick={handleClose}>
        Close
      </button>
      <button className="button">Submit Order</button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal open={progress === "checkout"} onClose={handleFinish}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          <button className="button" onClick={handleFinish}>
            Okay
          </button>
        </p>
      </Modal>
    );
  }
  return (
    <Modal open={progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Your Cart</h2>
        <p>Total amount: {currencyFormatter.format(cartTotal)}</p>
        <p className="control">
          <label htmlFor="full-name">Full Name</label>
          <input type="text" name="name" id="full-name" required />
        </p>
        <p className="control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </p>
        <p className="control">
          <label htmlFor="street">Street</label>
          <input type="text" name="street" id="street" required />
        </p>
        <p className="control-row">
          <p className="control">
            <label htmlFor="postal-code">Postal Code</label>
            <input type="text" name="postal-code" id="postal-code" required />
          </p>
          <p className="control">
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" required />
          </p>
        </p>
        {error && <Error title="Failed to submit order" message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}

export default Checkout;

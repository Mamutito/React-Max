import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = ({ onClick }) => {
  const cartItems = useSelector((state) => state.cart);
  const total = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <button className={classes.button} onClick={onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;

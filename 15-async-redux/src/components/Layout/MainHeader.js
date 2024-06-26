import { useDispatch } from "react-redux";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { cartActions } from "../../store/cartActions";

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const handleShowCart = () => dispatch(cartActions.toggleCart());
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={handleShowCart} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

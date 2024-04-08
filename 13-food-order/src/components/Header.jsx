import React, { useContext, useState } from "react";
import logo from "../assets/logo.jpg";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

function Header() {
  const { items } = useContext(CartContext);
  const { showCart, progress } = useContext(UserProgressContext);

  const totalCartItems = items.reduce(
    (totalNumber, item) => totalNumber + item.quantity,
    0
  );
  const handleShowCart = () => {
    console.log("click");
    showCart();
  };
  console.log("progress2", progress);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="hamburger logo" />
        <h1>REACTFOOD</h1>
      </div>
      <button onClick={handleShowCart} className="text-button">
        Cart ({totalCartItems})
      </button>
    </header>
  );
}

export default Header;

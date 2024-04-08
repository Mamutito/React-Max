import React from "react";
import logo from "../assets/logo.jpg";

function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="hamburger logo" />
        <h1>REACTFOOD</h1>
      </div>
      <button className="text-button">Cart(0)</button>
    </header>
  );
}

export default Header;

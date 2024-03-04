import React from "react";
import logo from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <div id="header">
      <img src={logo} alt="Logo of investment calculator" />
      <h1>Investment Calculator</h1>
    </div>
  );
}

export default Header;

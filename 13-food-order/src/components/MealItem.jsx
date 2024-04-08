import React, { useContext } from "react";
import { currencyFormatter } from "../utils/formattingCurrency";
import CartContext from "../store/CartContext";

function MealItem({ meal }) {
  const { addItem } = useContext(CartContext);
  const handleAddMealToCart = () => {
    addItem(meal);
  };
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt="" />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <button className="button" onClick={handleAddMealToCart}>
            Add to Cart
          </button>
        </p>
      </article>
    </li>
  );
}

export default MealItem;

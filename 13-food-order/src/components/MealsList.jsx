import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import { getMeals } from "../services/meals";

function MealsList() {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState();

  async function fetchMeals() {
    setLoading(true);
    try {
      const mealsData = await getMeals();
      setMeals(mealsData);
    } catch (error) {
      setMeals(meals);
      setError({ message: error.message || "Error fetching data" });
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <main>
      {loading && <p>Getting meals...</p>}
      {!loading && meals.length > 0 && (
        <ul id="meals">
          {meals.map((meal) => {
            return <MealItem key={meal.id} meal={meal} />;
          })}
        </ul>
      )}
    </main>
  );
}

export default MealsList;

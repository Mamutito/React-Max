import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
const requestConfig = {};
function MealsList() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <main>
      {isLoading && <p className="center">Getting meals...</p>}
      {!isLoading && loadedMeals.length > 0 && (
        <ul id="meals">
          {loadedMeals.map((meal) => {
            return <MealItem key={meal.id} meal={meal} />;
          })}
        </ul>
      )}
    </main>
  );
}

export default MealsList;

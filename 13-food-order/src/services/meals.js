export async function getMeals() {
  const response = await fetch("http://localhost:3000/meals");

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }
  const resData = await response.json();
  return resData;
}

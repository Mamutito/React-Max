import Places from "./Places.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import useFetch from "../hooks/useFetch.jsx";

async function getSortedFetchPlaces() {
  const places = await fetchAvailablePlaces();

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        coords.latitude,
        coords.longitude
      );
      resolve(sortedPlaces);
    });
  });
}

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    isLoading,
    fetchedData: availablePlaces,
    error,
  } = useFetch(getSortedFetchPlaces, []);

  if (error) {
    return <ErrorMessage title="An error occurred!" message={error.message} />;
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      isLoading={isLoading}
      loadingText="Fetching place data..."
    />
  );
}

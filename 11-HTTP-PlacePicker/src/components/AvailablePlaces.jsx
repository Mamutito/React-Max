import React, { useState, useEffect } from "react";
import Places from "./Places.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchPlaces = async () => {
      setIsLoading(true);
      try {
        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            coords.latitude,
            coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsLoading(false);
        });
      } catch (error) {
        console.log(error);
        setError({
          message:
            error.message || "Could not Fetch places, please try again later.",
        });
        setIsLoading(false);
      }
    };
    fetchPlaces();
    /*     fetch("http://localhost:3000/places")
      .then((response) => response.json())
      .then((resData) => {
        setAvailablePlaces(resData.places);
      }); */
  }, []);

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

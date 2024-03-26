import React, { useState, useEffect } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  useEffect(() => {
    const fetchPlaces = async () => {
      const response = await fetch("http://localhost:3000/places");
      const resData = await response.json();
      setAvailablePlaces(resData.places);
    };
    fetchPlaces();
    /*     fetch("http://localhost:3000/places")
      .then((response) => response.json())
      .then((resData) => {
        setAvailablePlaces(resData.places);
      }); */
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

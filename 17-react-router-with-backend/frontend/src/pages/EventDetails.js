import React from "react";
import { useParams } from "react-router-dom";

function EventDetailsPage() {
  const params = useParams();
  return (
    <>
      <h1>EventDetailsPage</h1>
      <p>{params.eventId}</p>
    </>
  );
}

export default EventDetailsPage;

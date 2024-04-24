import React from "react";
import EventsList from "../components/EventsList";
import { json, useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  return (
    <>
      <h1>EventsPage</h1>
      <EventsList events={data.events} />
    </>
  );
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json(
      { message: "Could not fetch events" },
      {
        status: 500,
      }
    );
  }

  return response;
};

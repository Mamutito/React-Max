import React from "react";
import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const events = useLoaderData();
  return (
    <>
      <h1>EventsPage</h1>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export const loader = async (arg) => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //...
  }

  const resData = await response.json();
  return resData.events;
};

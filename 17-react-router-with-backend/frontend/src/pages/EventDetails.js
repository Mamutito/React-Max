import React from "react";
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailsPage() {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <h1>EventDetailsPage</h1>
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailsPage;

export const loader = async ({ params }) => {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not get the event selected" },
      { status: 500 }
    );
  }
  return response;
};

export const action = async ({ params, request }) => {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Could not delete the event" }, { status: 500 });
  }
  return redirect("/events");
};

import { useRouteLoaderData, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetail() {
  const eventData = useRouteLoaderData("event-detail");

  return <EventItem event={eventData.event} />;
}

export async function loadEventDetailAction({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${eventId}`);
  if (!response.ok) {
    //
  } else {
    return response;
  }
}

export async function deleteEventAction({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method,
  });
  if (!response.ok) {
    //
  }
  return redirect("/events");
}

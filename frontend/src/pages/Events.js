import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

export default function Events() {
  const eventsData = useLoaderData();
  const events = eventsData.events;
  return <EventsList events={events} />;
}

export async function loadAllEventsAction() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    //
  } else {
    return response;
  }
}

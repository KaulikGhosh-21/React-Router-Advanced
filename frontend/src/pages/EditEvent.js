import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function EditEvent() {
  const eventDetail = useRouteLoaderData("event-detail");
  return <EventForm event={eventDetail.event} method="patch" />;
}

export async function editEventAction({ request, params }) {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  console.log(data);
  const eventId = params.eventId;
  const response = await fetch(`http://localhost:8080/events`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  if (!response.ok) {
    //
  } else {
    return response;
  }
}

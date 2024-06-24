import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function EditEvent() {
  const eventDetail = useRouteLoaderData("event-detail");
  return <EventForm event={eventDetail.event} method="patch" />;
}

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Events, { loadAllEventsAction } from "./pages/Events";
import RootLayout from "./pages/RootLayout";
import EventsLayout from "./pages/EventsLayout";
import EventDetail, {
  deleteEventAction,
  loadEventDetailAction,
} from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import { eventAction } from "./components/EventForm";

// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "events",
          element: <EventsLayout />,
          children: [
            {
              path: "",
              element: <Events />,
              loader: loadAllEventsAction,
            },
            {
              path: ":eventId",
              loader: loadEventDetailAction,
              id: "event-detail",
              children: [
                {
                  index: true,
                  element: <EventDetail />,
                  action: deleteEventAction,
                },
                {
                  path: "edit",
                  element: <EditEvent />,
                  action: eventAction,
                },
              ],
            },
            {
              path: "new",
              element: <NewEvent />,
              action: eventAction,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

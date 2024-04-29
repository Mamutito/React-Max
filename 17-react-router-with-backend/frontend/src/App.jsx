import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import EventsLayout from "./components/EventsRoot";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailsPage, {
  action as deleteEventAction,
  loader as eventDetailLoader,
} from "./pages/EventDetails";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import { action as manipulateEventsAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import AuthenticationPage, {
  action as authAction,
} from "./pages/Authentication";
import { action as logoutAction } from "./pages/Logout";
import { authLoader, checkAuthLoader } from "./util/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: authLoader,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventsAction,
            loader: checkAuthLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventsAction,
                loader: checkAuthLoader,
              },
              {
                index: true,
                element: <EventDetailsPage />,
                action: deleteEventAction,
              },
            ],
          },
        ],
      },
      {
        path: "/newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: "/auth",
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: "/logout",
        action: logoutAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;

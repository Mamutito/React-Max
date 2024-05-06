import { Link, Outlet, useParams } from "react-router-dom";
import Header from "../Header.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchEvent } from "../../utils/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventDetails() {
  const { id } = useParams();

  const { data, isError, error, isPending } = useQuery({
    queryKey: ["event", id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  let content;

  if (isPending) {
    content = (
      <div id="event-details-content" className="center">
        <LoadingIndicator />;
      </div>
    );
  }

  if (isError) {
    content = (
      <div id="event-details-content" className="center">
        <ErrorBlock
          title="Failed to load event"
          message={error.info?.message || "Please try again later."}
        />
      </div>
    );
  }

  if (data) {
    const formattedData = new Date(data.date).toLocaleDateString("en-ES", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <Link to="delete">Delete</Link>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.title}</p>
              <time dateTime={`${data.date}T${data.time}`}>
                {formattedData} @ {data.time}
              </time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
        ;
      </>
    );
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isPending && <LoadingIndicator />}
      {isError && (
        <ErrorBlock
          title="Failed to fetch the event data"
          message={error.info?.message || "Please try again later."}
        />
      )}
      {data && <article id="event-details">{content}</article>}
    </>
  );
}

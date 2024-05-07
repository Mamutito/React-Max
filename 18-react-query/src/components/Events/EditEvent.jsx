import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { client, fetchEvent, updateEvent } from "../../utils/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isPending, error, isError } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: ({ event }) => {
      //optimistic update
      client.cancelQueries({ queryKey: ["events", id] });
      const prevData = client.getQueryData(["events", id]);
      client.setQueryData(["events", id], event);
      return { prevData };
    },
    onError: (error, data, context) => {
      client.setQueryData(["events", id], context.prevData);
    },
    onSettled: () => {
      client.invalidateQueries({ queryKey: ["event", id] });
    },
  });

  function handleSubmit(formData) {
    mutate({ id, event: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }
  let content;
  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message ||
            "Failed to load event, please try again later."
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

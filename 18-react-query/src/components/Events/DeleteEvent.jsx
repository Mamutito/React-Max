import { Link, useNavigate, useParams } from "react-router-dom";
import Modal from "../UI/Modal";
import WarningBlock from "../UI/WarningBlock";
import { useMutation } from "@tanstack/react-query";
import { client, deleteEvent } from "../../utils/http";
import ErrorBlock from "../UI/ErrorBlock";

function DeleteEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mutate, isError, isPending } = useMutation({
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["events"] });
      navigate("/events");
    },
    mutationFn: deleteEvent,
  });
  const handleConfirm = () => {
    mutate(id);
  };
  return (
    <Modal onClose={() => navigate("../")}>
      <div className="message-block">
        <WarningBlock title={"Are you sure you want to delete the event?"} />
      </div>
      {isError && (
        <ErrorBlock
          title="Failed to delete the event"
          message="Please try again later"
        />
      )}
      <p className="form-actions" disabled={isPending}>
        <Link to={"../"} className="button-text">
          Cancel
        </Link>
        <button onClick={handleConfirm} className="button" disabled={isPending}>
          {isPending ? "Processing..." : "Confirm"}
        </button>
      </p>
    </Modal>
  );
}

export default DeleteEvent;

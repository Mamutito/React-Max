import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();
  const score = Math.round((1 - remainingTime / targetTime) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {remainingTime <= 0 ? <h2>You Lost</h2> : <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} senconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{remainingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;

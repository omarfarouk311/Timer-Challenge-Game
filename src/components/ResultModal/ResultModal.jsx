import styles from "./ResultModal.module.css";
import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(
  ({ targetTime, remainingTime, handleReset }, ref) => {
    //A ref that is attached to the dialog element
    const dialog = useRef();

    //abstract show method
    useImperativeHandle(ref, () => {
      return {
        show() {
          dialog.current.showModal();
        },
      };
    });

    const hasWon = remainingTime > 0;
    const score = Math.round((1 - remainingTime / targetTime) * 100);

    return createPortal(
      <dialog
        className={styles["result-modal"]}
        ref={dialog}
        onClose={handleReset}
      >
        <h2>You {hasWon ? "Won" : "Lost"}</h2>
        {hasWon && <h2>Your Score: {score}</h2>}
        <p>
          The target time was{" "}
          <strong>
            {targetTime} second{targetTime > 1 ? "s" : ""}.
          </strong>
        </p>
        {hasWon && (
          <p>
            You stopped the timer with{" "}
            <strong>
              {remainingTime} second{remainingTime > 1 ? "s" : ""} left.
            </strong>
          </p>
        )}
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>,
      document.getElementById("modal")
    );
  }
);

export default ResultModal;

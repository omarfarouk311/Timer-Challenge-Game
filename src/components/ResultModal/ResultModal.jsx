import styles from "./ResultModal.module.css";
import { forwardRef, useRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(({ targetTime, remainingTime }, ref) => {
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

  return (
    <dialog className={styles["result-modal"]} ref={dialog}>
      <h2>You {remainingTime ? "won" : "lost"}</h2>
      <p>
        The target time was
        <strong>
          {targetTime} second{targetTime > 1 ? "s" : ""}.
        </strong>
      </p>
      {remainingTime && (
        <p>
          You stopped the timer with{" "}
          <strong>
            {remainingTime} second{remainingTime > 1 ? "s" : ""}. left.
          </strong>
        </p>
      )}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;

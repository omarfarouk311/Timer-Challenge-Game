import { useState, useRef } from "react";
import styles from "./TimerChallenge.module.css";
import ResultModal from "../ResultModal/ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();
  const timerIsActive = remainingTime && remainingTime < targetTime * 1000;

  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.show();
  }

  function handleReset() {
    setRemainingTime(targetTime * 1000);
  }

  if (!remainingTime) {
    handleStop();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={remainingTime / 1000}
        handleReset={handleReset}
      />
      <section className={styles.challenge}>
        <h2>{title}</h2>
        <p className={styles["challenge-time"]}>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} The Challenge
          </button>
        </p>
        <p className={timerIsActive ? styles.active : undefined}>
          {timerIsActive ? "Time is running..." : "Timer is inactive"}
        </p>
      </section>
    </>
  );
}

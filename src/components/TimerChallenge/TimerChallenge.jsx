import { useState, useRef } from "react";
import styles from "./TimerChallenge.module.css";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, updatedTimerState] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);
  const timer = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerFinished(true);
      updatedTimerState(false);
    }, targetTime * 1000);

    setTimerFinished(false);
    updatedTimerState(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    updatedTimerState(false);
  }

  return (
    <section className={styles.challenge}>
      <h2>{title}</h2>
      {timerFinished && "You Lost!"}
      <p className={styles["challenge-time"]}>
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} The Challenge
        </button>
      </p>
      <p className={timerStarted ? styles.active : undefined}>
        {timerStarted ? "Time is running..." : "Timer is inactive"}
      </p>
    </section>
  );
}

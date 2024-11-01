import { useState, useRef } from "react";
import styles from "./Player.module.css";

export default function Player() {
  const [userInput, setUserInput] = useState("Player1");
  const playerName = useRef();

  function handleClick() {
    setUserInput(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id={styles.player}>
      <h2>Welcome {userInput}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

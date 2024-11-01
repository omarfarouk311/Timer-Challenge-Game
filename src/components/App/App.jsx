import Player from "../Player/Player.jsx";
import TimerChallenge from "../TimerChallenge/TimerChallenge.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Player />
      <div id={styles.challenges}>
        <TimerChallenge title={"Easy"} targetTime={1} />
        <TimerChallenge title={"Not Easy"} targetTime={5} />
        <TimerChallenge title={"Getting Tough"} targetTime={10} />
        <TimerChallenge title={"Pros only"} targetTime={15} />
      </div>
    </>
  );
}

export default App;

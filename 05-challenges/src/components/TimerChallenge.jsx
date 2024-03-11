import { useRef, useState } from "react";

function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };
  return (
    <div className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 && "s"}
      </p>
      {timerExpired && <p>You lost!!</p>}
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </div>
  );
}

export default TimerChallenge;

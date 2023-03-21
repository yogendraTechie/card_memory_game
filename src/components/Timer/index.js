import { useContext } from "react";
import { TimerContext } from "../../context/TimerContext";

const Timer = () => {
  const { remainingTime } = useContext(TimerContext);
  return (
    <div>
      <span>Timer: </span>
      <span>{remainingTime} Seconds</span>
    </div>
  );
};

export default Timer;

import { createContext, useState, useEffect, Children } from "react";

export const TimerContext = createContext();

const INIT_TIMER = 15;

const TimerContextProvider = ({ children }) => {
  const [timer, setTimer] = useState(false);
  const [remainingTime, setRemainingTime] = useState(INIT_TIMER);

  useEffect(() => {
    if (!timer) {
      setRemainingTime(INIT_TIMER);
    }
  }, [timer]);

  useEffect(() => {
    if (timer) {
      let t = setInterval(() => {
        setRemainingTime((remainingTime) =>
          remainingTime > 0 ? remainingTime - 1 : 0
        );
      }, 1000);
      return () => clearInterval(t);
    }
  }, [timer, setRemainingTime]);

  return (
    <TimerContext.Provider value={{ timer, remainingTime, setTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContextProvider };

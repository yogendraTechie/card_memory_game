import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { TimerContextProvider } from "./context/TimerContext";
import { ScoreContextProvider } from "./context/ScoreContext";
import { CardsContextProvider } from "./context/CardsContext";
import { composeProviders } from "./utils/composeProviders";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Provider = composeProviders([
  Router,
  TimerContextProvider,
  ScoreContextProvider,
  CardsContextProvider,
]);

root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { render } from "@testing-library/react";
import Home from ".";
import { MemoryRouter as Router } from "react-router-dom";
import { TimerContextProvider } from "../../context/TimerContext";
import { ScoreContextProvider } from "../../context/ScoreContext";
import { CardsContextProvider } from "../../context/CardsContext";
import { composeProviders } from "../../utils/composeProviders";

const Provider = composeProviders([
  Router,
  TimerContextProvider,
  ScoreContextProvider,
  CardsContextProvider,
]);

describe("Home", () => {
  const setup = () =>
    render(
      <Provider>
        <Home />
      </Provider>
    );

  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});

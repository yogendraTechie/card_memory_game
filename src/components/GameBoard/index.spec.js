import { render } from "@testing-library/react";
import GameBoard from ".";
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

describe("GameBoard", () => {
  const setup = () =>
    render(
      <Provider>
        <GameBoard />
      </Provider>
    );

  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});

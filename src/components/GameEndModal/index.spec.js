import { render } from "@testing-library/react";
import GameEndModal from ".";
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

describe("GameEndModal", () => {
  const setup = () =>
    render(
      <Provider>
        <GameEndModal />
      </Provider>
    );

  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});

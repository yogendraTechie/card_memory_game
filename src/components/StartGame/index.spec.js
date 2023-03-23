import { render } from "@testing-library/react";
import StartGame from ".";
import { MemoryRouter as Router } from "react-router-dom";
import { TimerContextProvider } from "../../context/TimerContext";
import { CardsContextProvider } from "../../context/CardsContext";
import { composeProviders } from "../../utils/composeProviders";

const Provider = composeProviders([
  Router,
  TimerContextProvider,
  CardsContextProvider,
]);

describe("StartGame", () => {
  const setup = () =>
    render(
      <Provider>
        <StartGame />
      </Provider>
    );

  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should display correct button text", () => {
    const { getByTestId } = setup();
    const value = getByTestId("button").textContent;
    expect(value).toBe("Start Game");
  });
});

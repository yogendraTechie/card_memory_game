import { render } from "@testing-library/react";
import ScoreBoard from ".";
import { MemoryRouter as Router } from "react-router-dom";
import { TimerContextProvider } from "../../context/TimerContext";
import { composeProviders } from "../../utils/composeProviders";

const Provider = composeProviders([Router, TimerContextProvider]);

describe("ScoreBoard", () => {
  const setup = () =>
    render(
      <Provider>
        <ScoreBoard />
      </Provider>
    );

  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});

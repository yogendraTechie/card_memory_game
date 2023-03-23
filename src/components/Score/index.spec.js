import { render } from "@testing-library/react";
import Score from ".";
import { MemoryRouter as Router } from "react-router-dom";
import { ScoreContext } from "../../context/ScoreContext";

describe("Score", () => {
  const setup = () =>
    render(
      <Router>
        <ScoreContext.Provider value={{ score: 100 }}>
          <Score />
        </ScoreContext.Provider>
      </Router>
    );

  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should display score label", () => {
    const { getByTestId } = setup();
    const value = getByTestId("score-label").textContent;
    expect(value).toBe("Score: ");
  });

  it("should display score value", () => {
    const { getByTestId } = setup();
    const value = getByTestId("score-value").textContent;
    expect(value).toBe("100");
  });
});

import { render } from "@testing-library/react";
import Timer from ".";
import { MemoryRouter as Router } from "react-router-dom";
import { TimerContext } from "../../context/TimerContext";

describe("Timer", () => {
  const setup = () =>
    render(
      <Router>
        <TimerContext.Provider value={{ remainingTime: 30 }}>
          <Timer />
        </TimerContext.Provider>
      </Router>
    );

  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should display timer label", () => {
    const { getByTestId } = setup();
    const value = getByTestId("timer-label").textContent;
    expect(value).toBe("Timer: ");
  });

  it("should display timer value", () => {
    const { getByTestId } = setup();
    const value = getByTestId("timer-value").textContent;
    expect(value).toBe("30 Seconds");
  });
});

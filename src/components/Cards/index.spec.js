import { render } from "@testing-library/react";
import Cards from ".";
import { MemoryRouter as Router } from "react-router-dom";
import { ScoreContextProvider } from "../../context/ScoreContext";
import { CardsContextProvider } from "../../context/CardsContext";
import { composeProviders } from "../../utils/composeProviders";

const Provider = composeProviders([
  Router,
  ScoreContextProvider,
  CardsContextProvider,
]);

describe("Cards", () => {
  const setup = () =>
    render(
      <Provider>
        <Cards />
      </Provider>
    );

  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});

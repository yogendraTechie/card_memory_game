import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from ".";

describe("Card", () => {
  const setup = () =>
    render(
      <MemoryRouter>
        <Card
          setSelectedPair={() => {}}
          card={{ disable: false, visibility: true, avatar_url: "" }}
        />
      </MemoryRouter>
    );

  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render the card image", () => {
    setup();
    expect(screen.getByAltText("avatar")).toBeInTheDocument();
  });
});

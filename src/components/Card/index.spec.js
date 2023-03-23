import { render, screen } from "@testing-library/react";
import Card from ".";

describe("Card", () => {
  const setup = () =>
    render(
      <Card
        setSelectedPair={() => {}}
        card={{ disable: false, visibility: true, avatar_url: "" }}
      />
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

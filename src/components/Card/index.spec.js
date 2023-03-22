import { render, screen } from "@testing-library/react";
import Card from ".";

describe("Card", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Card card={{ disable: "", visibility: "", avatar_url: "" }} />
    );
    expect(baseElement).toBeInTheDocument();
  });

  it("should render the card image", () => {
    render(<Card card={{ disable: "", visibility: true, avatar_url: "" }} />);
    expect(screen.getByAltText("avatar")).toBeInTheDocument();
  });
});

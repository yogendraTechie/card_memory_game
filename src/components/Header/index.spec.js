import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeInTheDocument();
  });

  it("should render header text successfully", () => {
    render(<Header />);
    expect(screen.getByText("Github Memory")).toBeInTheDocument();
  });
});

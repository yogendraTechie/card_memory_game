import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from ".";

describe("Header", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(baseElement).toBeInTheDocument();
  });

  it("should render header text successfully", () => {
    render(<Header />);
    expect(screen.getByText("Github Memory")).toBeInTheDocument();
  });
});

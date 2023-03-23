import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Loader from ".";

describe("Loader", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <MemoryRouter>
        <Loader />
      </MemoryRouter>
    );
    expect(baseElement).toBeInTheDocument();
  });
});

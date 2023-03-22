import { render } from "@testing-library/react";
import Loader from ".";

describe("Loader", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Loader />);
    expect(baseElement).toBeInTheDocument();
  });
});

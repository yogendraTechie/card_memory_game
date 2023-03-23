import { fireEvent, render, screen } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  const setup = () => {
    return render(<Button action={() => {}} title="test" />);
  };

  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should call provided action prop on button click", () => {
    const mockOnClick = jest.fn();
    render(<Button action={mockOnClick} title="test" />);
    fireEvent.click(screen.getByTestId("button"));
    expect(mockOnClick).toBeCalled();
  });

  it("should display correct button text", () => {
    const { getByTestId } = setup();
    const value = getByTestId("button").textContent;
    expect(value).toBe("test");
  });
});

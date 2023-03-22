import { fireEvent, render, screen } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Button>Button</Button>);
    expect(baseElement).toBeInTheDocument();
  });

  it("should call provided action prop on button click", () => {
    const mockOnClick = jest.fn();
    render(<Button action={mockOnClick}>Button</Button>);
    fireEvent.click(screen.getByTestId("button"));
    expect(mockOnClick).toBeCalled();
  });

  it("should display correct button text", () => {
    const { getByTestId } = render(<Button title="test" />);
    const value = getByTestId("button").textContent;
    expect(value).toBe("test");
  });
});

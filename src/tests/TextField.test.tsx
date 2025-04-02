// src/tests/TextField.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import TextField from "../components/TextField";

describe("TextField Component", () => {
  // Basic rendering tests
  test("renders with a label", () => {
    render(<TextField label="Test Label" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  //   test("renders with a placeholder", () => {
  //     render(<TextField label="Test Label" placeholder="Test Placeholder" />);
  //     expect(screen.getByPlaceholderText("Test Placeholder")).toBeInTheDocument();
  //   });

  //   test("renders with helper text", () => {
  //     render(<TextField label="Test Label" helperText="Helper Text" />);
  //     expect(screen.getByText("Helper Text")).toBeInTheDocument();
  //   });

  //   // State and behavior tests
  //   test("handles value changes", async () => {
  //     const handleChange = jest.fn();
  //     render(<TextField label="Test Label" onChange={handleChange} />);

  //     const input = screen.getByRole("textbox");
  //     await userEvent.type(input, "test value");

  //     expect(handleChange).toHaveBeenCalledTimes(10); // Once for each character
  //     expect(input).toHaveValue("test value");
  //   });

  //   test("handles focus and blur events", () => {
  //     const handleFocus = jest.fn();
  //     const handleBlur = jest.fn();

  //     render(
  //       <TextField label="Test Label" onFocus={handleFocus} onBlur={handleBlur} />
  //     );

  //     const input = screen.getByRole("textbox");
  //     fireEvent.focus(input);
  //     expect(handleFocus).toHaveBeenCalledTimes(1);

  //     fireEvent.blur(input);
  //     expect(handleBlur).toHaveBeenCalledTimes(1);
  //   });

  //   // Variant tests
  //   test("renders the outlined variant", () => {
  //     render(<TextField label="Test Label" variant="outlined" />);
  //     const container = screen.getByTestId("ids-textfield-container");
  //     expect(container).toHaveClass("ids-textfield--outlined");
  //   });

  //   test("renders the filled variant", () => {
  //     render(<TextField label="Test Label" variant="filled" />);
  //     const container = screen.getByTestId("ids-textfield-container");
  //     expect(container).toHaveClass("ids-textfield--filled");
  //   });

  //   test("renders the standard variant", () => {
  //     render(<TextField label="Test Label" variant="standard" />);
  //     const container = screen.getByTestId("ids-textfield-container");
  //     expect(container).toHaveClass("ids-textfield--standard");
  //   });

  //   // Error state tests
  //   test("displays an error message when in error state", () => {
  //     render(
  //       <TextField label="Test Label" error={true} errorMessage="Error message" />
  //     );

  //     expect(screen.getByText("Error message")).toBeInTheDocument();
  //     const input = screen.getByRole("textbox");
  //     expect(input).toHaveAttribute("aria-invalid", "true");
  //   });

  //   // Required state tests
  //   test("displays required indicator when required", () => {
  //     render(<TextField label="Test Label" required={true} />);

  //     const label = screen.getByText("Test Label");
  //     const requiredIndicator = screen.getByText("*");

  //     expect(requiredIndicator).toBeInTheDocument();
  //     expect(label.parentElement).toContainElement(requiredIndicator);
  //   });

  //   // Disabled state tests
  //   test("renders in disabled state", () => {
  //     render(<TextField label="Test Label" disabled={true} />);

  //     const input = screen.getByRole("textbox");
  //     expect(input).toBeDisabled();

  //     const container = screen.getByTestId("ids-textfield-container");
  //     expect(container).toHaveClass("ids-textfield--disabled");
  //   });

  //   // Label position tests
  //   test("renders with top label position", () => {
  //     render(<TextField label="Test Label" labelPosition="top" />);

  //     const container = screen.getByTestId("ids-textfield-container");
  //     const label = screen.getByText("Test Label");

  //     expect(label).not.toHaveClass("ids-textfield-label--inside");
  //   });

  //   test("renders with inside label position", () => {
  //     render(<TextField label="Test Label" labelPosition="inside" />);

  //     const label = screen.getByText("Test Label");
  //     expect(label).toHaveClass("ids-textfield-label--inside");
  //   });

  //   // Theme tests
  //   test("renders with light theme", () => {
  //     render(<TextField label="Test Label" theme="light" />);

  //     const container = screen.getByTestId("ids-textfield-container");
  //     expect(container).toHaveClass("ids-textfield--light");
  //   });

  //   test("renders with dark theme", () => {
  //     render(<TextField label="Test Label" theme="dark" />);

  //     const container = screen.getByTestId("ids-textfield-container");
  //     expect(container).toHaveClass("ids-textfield--dark");
  //   });

  //   test("renders with high-contrast theme", () => {
  //     render(<TextField label="Test Label" theme="high-contrast" />);

  //     const container = screen.getByTestId("ids-textfield-container");
  //     expect(container).toHaveClass("ids-textfield--high-contrast");
  //   });

  //   // Accessibility tests
  //   test("has appropriate ARIA attributes", () => {
  //     render(
  //       <TextField label="Test Label" required={true} helperText="Helper Text" />
  //     );

  //     const input = screen.getByRole("textbox");
  //     expect(input).toHaveAttribute("aria-required", "true");
  //     expect(input).toHaveAttribute("aria-describedby");
  //   });

  //   // Additional property tests
  //   test("passes additional HTML attributes to the input", () => {
  //     render(
  //       <TextField
  //         label="Test Label"
  //         data-testid="custom-testid"
  //         maxLength={10}
  //       />
  //     );

  //     const input = screen.getByRole("textbox");
  //     expect(input).toHaveAttribute("maxLength", "10");
  //   });

  //   // Icon tests
  //   test("renders with start and end icons", () => {
  //     const StartIcon = () => <div data-testid="start-icon">Start</div>;
  //     const EndIcon = () => <div data-testid="end-icon">End</div>;

  //     render(
  //       <TextField
  //         label="Test Label"
  //         startIcon={<StartIcon />}
  //         endIcon={<EndIcon />}
  //       />
  //     );

  //     expect(screen.getByTestId("start-icon")).toBeInTheDocument();
  //     expect(screen.getByTestId("end-icon")).toBeInTheDocument();

  //     const input = screen.getByRole("textbox");
  //     expect(input).toHaveClass("ids-textfield-input--with-start-icon");
  //     expect(input).toHaveClass("ids-textfield-input--with-end-icon");
  //   });
});

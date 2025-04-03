// src/tests/TextField.a11y.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import TextField from "../components/TextField";

// Add custom jest matchers
expect.extend(toHaveNoViolations);

describe("TextField Accessibility", () => {
  test("should not have accessibility violations", async () => {
    const { container } = render(<TextField label="Test Label" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("should not have accessibility violations with error state", async () => {
    const { container } = render(
      <TextField label="Test Label" error={true} errorMessage="Error message" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("should not have accessibility violations with required state", async () => {
    const { container } = render(
      <TextField label="Test Label" required={true} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("should not have accessibility violations with helper text", async () => {
    const { container } = render(
      <TextField label="Test Label" helperText="Helper text" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("should not have accessibility violations with icons", async () => {
    const StartIcon = () => <div>Start</div>;
    const EndIcon = () => <div>End</div>;

    const { container } = render(
      <TextField
        label="Test Label"
        startIcon={<StartIcon />}
        endIcon={<EndIcon />}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("should not have accessibility violations with inside label", async () => {
    const { container } = render(
      <TextField label="Test Label" labelPosition="inside" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("should not have accessibility violations in disabled state", async () => {
    const { container } = render(
      <TextField label="Test Label" disabled={true} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("should not have accessibility violations with different variants", async () => {
    // Test outlined variant
    const { container: outlinedContainer } = render(
      <TextField label="Test Label" variant="outlined" />
    );
    let results = await axe(outlinedContainer);
    expect(results).toHaveNoViolations();

    // Test filled variant
    const { container: filledContainer } = render(
      <TextField label="Test Label" variant="filled" />
    );
    results = await axe(filledContainer);
    expect(results).toHaveNoViolations();

    // Test standard variant
    const { container: standardContainer } = render(
      <TextField label="Test Label" variant="standard" />
    );
    results = await axe(standardContainer);
    expect(results).toHaveNoViolations();
  });

  test("should not have accessibility violations with different themes", async () => {
    // Test light theme
    const { container: lightContainer } = render(
      <TextField label="Test Label" theme="light" />
    );
    let results = await axe(lightContainer);
    expect(results).toHaveNoViolations();

    // Test dark theme
    const { container: darkContainer } = render(
      <TextField label="Test Label" theme="dark" />
    );
    results = await axe(darkContainer);
    expect(results).toHaveNoViolations();

    // Test high-contrast theme
    const { container: highContrastContainer } = render(
      <TextField label="Test Label" theme="high-contrast" />
    );
    results = await axe(highContrastContainer);
    expect(results).toHaveNoViolations();
  });

  test("should have proper keyboard navigation support", () => {
    render(<TextField label="Test Label" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("tabIndex", "0");
  });

  test("should associate label with input using htmlFor", () => {
    render(<TextField label="Test Label" id="test-id" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("id", "test-id");

    const label = screen.getByText("Test Label");
    expect(label).toHaveAttribute("for", "test-id");
  });

  test("should associate error message with input using aria-describedby", () => {
    render(
      <TextField
        label="Test Label"
        id="test-id"
        error={true}
        errorMessage="Error message"
      />
    );

    const input = screen.getByRole("textbox");
    const errorMessageId = input.getAttribute("aria-describedby");
    expect(errorMessageId).toBeTruthy();

    const errorMessage = screen.getByText("Error message");
    expect(errorMessage).toHaveAttribute("id", errorMessageId);
  });

  test("should associate helper text with input using aria-describedby", () => {
    render(
      <TextField label="Test Label" id="test-id" helperText="Helper text" />
    );

    const input = screen.getByRole("textbox");
    const helperTextId = input.getAttribute("aria-describedby");
    expect(helperTextId).toBeTruthy();

    const helperText = screen.getByText("Helper text");
    expect(helperText).toHaveAttribute("id", helperTextId);
  });
});

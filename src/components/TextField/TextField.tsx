// src/components/TextField/TextField.tsx
import React, { forwardRef, useState, useEffect, useRef } from "react";
import classNames from "classnames";
import "./TextField.css";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The label for the text field */
  label: string;
  /** Optional helper text to display below the input */
  helperText?: string;
  /** Whether the field is in an error state */
  error?: boolean;
  /** Error message to display */
  errorMessage?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** The ID for the input */
  id?: string;
  /** The name for the input */
  name?: string;
  /** The variant of the text field */
  variant?: "outlined" | "filled" | "standard";
  /** Optional icon to display at the start of the input */
  startIcon?: React.ReactNode;
  /** Optional icon to display at the end of the input */
  endIcon?: React.ReactNode;
  /** Callback when the field gains focus */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Callback when the field loses focus */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Label position */
  labelPosition?: "top" | "inside";
  /** Additional class name */
  className?: string;
  /** Theme for the text field */
  theme?: "light" | "dark" | "high-contrast";
  tabIndex?: number;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      helperText,
      error = false,
      errorMessage,
      required = false,
      disabled = false,
      id,
      name,
      variant = "outlined",
      startIcon,
      endIcon,
      onFocus,
      onBlur,
      labelPosition = "top",
      className,
      theme = "light",
      placeholder,
      value,
      onChange,
      // onInput,
      type = "text",
      tabIndex = 0,
      ...rest
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const [hasValue, setHasValue] = useState(Boolean(value));
    const [inputValue, setInputValue] = useState(value || "");
    // const inputRef = useRef<HTMLInputElement>(null);

    // const combinedRef = (node: HTMLInputElement | null) => {
    //   // Forward the ref
    //   if (typeof ref === "function") {
    //     ref(node);
    //   } else if (ref && "current" in ref) {
    //     (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
    //   }

    //   (inputRef as React.MutableRefObject<HTMLInputElement | null>).current =
    //     node;
    // };

    // Update hasValue when value prop changes
    useEffect(() => {
      setHasValue(Boolean(value));
      setInputValue(value || "");
    }, [value]);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      if (onFocus) {
        onFocus(e);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      if (onBlur) {
        onBlur(e);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setHasValue(Boolean(newValue));
      setInputValue(newValue);
      if (onChange) {
        onChange(e);
      }
    };

    // Generate a unique ID if none is provided
    const inputId =
      id || `textfield-${Math.random().toString(36).substring(2, 11)}`;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    const labelClassNames = classNames(
      "ids-textfield-label",
      {
        "ids-textfield-label--focused": focused,
        "ids-textfield-label--has-value": hasValue,
        "ids-textfield-label--error": error,
        "ids-textfield-label--disabled": disabled,
        "ids-textfield-label--required": required,
        "ids-textfield-label--inside": labelPosition === "inside",
        [`ids-textfield-label--${variant}`]: true,
        [`ids-textfield-label--${theme}`]: true,
      },
      `ids-textfield-label--${theme}`
    );

    const inputClassNames = classNames(
      "ids-textfield-input",
      {
        "ids-textfield-input--focused": focused,
        "ids-textfield-input--error": error,
        "ids-textfield-input--disabled": disabled,
        "ids-textfield-input--with-start-icon": Boolean(startIcon),
        "ids-textfield-input--with-end-icon": Boolean(endIcon),
        [`ids-textfield-input--${variant}`]: true,
        [`ids-textfield-input--${theme}`]: true,
      },
      `ids-textfield-input--${theme}`
    );

    const containerClassNames = classNames(
      "ids-textfield",
      {
        "ids-textfield--focused": focused,
        "ids-textfield--error": error,
        "ids-textfield--disabled": disabled,
        [`ids-textfield--${variant}`]: true,
        [`ids-textfield--${theme}`]: true,
      },
      `ids-textfield--${theme}`,
      className
    );

    const helperTextClassNames = classNames(
      "ids-textfield-helper-text",
      {
        "ids-textfield-helper-text--error": error,
        "ids-textfield-helper-text--disabled": disabled,
        [`ids-textfield-helper-text--${theme}`]: true,
      },
      `ids-textfield-helper-text--${theme}`
    );

    // const showLabel =
    //   labelPosition === "top" ||
    //   (labelPosition === "inside" && !hasValue && !focused);

    return (
      <div
        className={containerClassNames}
        data-testid="ids-textfield-container"
      >
        {labelPosition === "top" && (
          <label htmlFor={inputId} className={labelClassNames}>
            {label}
            {required && (
              <span className="ids-textfield-required-indicator">*</span>
            )}
          </label>
        )}
        <div className="ids-textfield-input-container">
          {startIcon && (
            <div className="ids-textfield-start-icon">{startIcon}</div>
          )}
          <div className="ids-textfield-input-wrapper">
            <input
              ref={null}
              // ref={combinedRef}
              id={inputId}
              name={name}
              className={inputClassNames}
              disabled={disabled}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              value={inputValue}
              placeholder={labelPosition === "inside" ? undefined : placeholder}
              aria-invalid={error}
              aria-required={required}
              aria-describedby={`${error ? errorId : ""}${helperText ? helperId : ""}`}
              type={type}
              tabIndex={tabIndex}
              {...rest}
            />
            {labelPosition === "inside" && (
              <label htmlFor={inputId} className={labelClassNames}>
                {label}
                {required && (
                  <span className="ids-textfield-required-indicator">*</span>
                )}
              </label>
            )}
          </div>
          {endIcon && <div className="ids-textfield-end-icon">{endIcon}</div>}
        </div>
        {(helperText || (error && errorMessage)) && (
          <div
            className={helperTextClassNames}
            id={error ? errorId : helperId}
            data-testid="ids-textfield-helper-text"
          >
            {error ? errorMessage : helperText}
          </div>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;

// import type { Meta, StoryObj } from "@storybook/react";
// import { TextField } from "./TextField";

// const meta: Meta<typeof TextField> = {
//   title: "Components/TextField",
//   component: TextField,
// };

// export default meta;

// type Story = StoryObj<typeof TextField>;

// export const Default: Story = {
//   args: {
//     label: "Address",
//     placeholder: "123 Main St",
//   },
// };

// export const EmailField: Story = {
//   args: {
//     label: "Email",
//     type: "email",
//     placeholder: "user@example.com",
//   },
// };

// export const UserIDFieldWithError: Story = {
//   args: {
//     label: "User ID",
//     placeholder: "12345678",
//     error: "User ID must be 8 digits",
//   },
// };
///////////////////////////////////
// import type { Meta, StoryObj } from "@storybook/react";
// import { TextField } from "./TextField";
// import { Mail, Lock, Eye, EyeOff } from "lucide-react";
// import { useState } from "react";

// // Meta information for the component
// const meta: Meta<typeof TextField> = {
//   title: "Components/TextField",
//   component: TextField,
//   parameters: {
//     layout: "centered",
//   },
//   tags: ["autodocs"],
//   argTypes: {
//     variant: {
//       control: "select",
//       options: ["outlined", "filled", "standard"],
//       description: "The style variant of the text field",
//     },
//     theme: {
//       control: "select",
//       options: ["light", "dark", "high-contrast"],
//       description: "The color theme of the text field",
//     },
//     labelPosition: {
//       control: "radio",
//       options: ["top", "inside"],
//       description: "Position of the field label",
//     },
//     disabled: {
//       control: "boolean",
//       description: "Whether the field is disabled",
//     },
//     required: {
//       control: "boolean",
//       description: "Whether the field is required",
//     },
//     error: {
//       control: "boolean",
//       description: "Whether the field has an error",
//     },
//   },
//   args: {
//     // Default args
//     label: "Label",
//     placeholder: "Placeholder text",
//     variant: "outlined",
//     theme: "light",
//     labelPosition: "top",
//   },
// };

// export default meta;
// type Story = StoryObj<typeof TextField>;

// // Basic example
// export const Default: Story = {
//   args: {
//     label: "Username",
//     placeholder: "Enter your username",
//   },
// };

// // Variants
// export const Outlined: Story = {
//   args: {
//     label: "Email",
//     placeholder: "Enter your email",
//     variant: "outlined",
//   },
// };

// export const Filled: Story = {
//   args: {
//     label: "Email",
//     placeholder: "Enter your email",
//     variant: "filled",
//   },
// };

// export const Standard: Story = {
//   args: {
//     label: "Email",
//     placeholder: "Enter your email",
//     variant: "standard",
//   },
// };

// // Label positions
// export const LabelTop: Story = {
//   args: {
//     label: "Full Name",
//     placeholder: "Enter your full name",
//     labelPosition: "top",
//   },
// };

// export const LabelInside: Story = {
//   args: {
//     label: "Full Name",
//     placeholder: "Enter your full name",
//     labelPosition: "inside",
//   },
// };

// // States
// export const WithHelperText: Story = {
//   args: {
//     label: "Password",
//     type: "password",
//     helperText: "Your password must be at least 8 characters",
//   },
// };

// export const WithError: Story = {
//   args: {
//     label: "Email",
//     error: true,
//     errorMessage: "Please enter a valid email address",
//     value: "invalid-email",
//   },
// };

// export const Required: Story = {
//   args: {
//     label: "Email",
//     required: true,
//     placeholder: "Required field",
//   },
// };

// export const Disabled: Story = {
//   args: {
//     label: "Username",
//     disabled: true,
//     value: "john.doe",
//   },
// };

// // With icons
// export const WithStartIcon: Story = {
//   args: {
//     label: "Email",
//     placeholder: "Enter your email",
//     startIcon: <Mail size={18} />,
//   },
// };

// export const WithEndIcon: Story = {
//   args: {
//     label: "Email",
//     placeholder: "Enter your email",
//     endIcon: <Mail size={18} />,
//   },
// };

// // Themes
// export const DarkTheme: Story = {
//   args: {
//     label: "Username",
//     placeholder: "Enter your username",
//     theme: "dark",
//   },
//   parameters: {
//     backgrounds: { default: "dark" },
//   },
// };

// export const HighContrastTheme: Story = {
//   args: {
//     label: "Username",
//     placeholder: "Enter your username",
//     theme: "high-contrast",
//   },
// };

// // Interactive example with password visibility toggle
// export const PasswordWithToggle: Story = {
//   render: (args) => {
//     const [showPassword, setShowPassword] = useState(false);
//     const togglePasswordVisibility = () => {
//       setShowPassword(!showPassword);
//     };

//     return (
//       <TextField
//         {...args}
//         type={showPassword ? "text" : "password"}
//         endIcon={
//           <button
//             onClick={togglePasswordVisibility}
//             type="button"
//             style={{
//               background: "none",
//               border: "none",
//               cursor: "pointer",
//               padding: 0,
//             }}
//           >
//             {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//           </button>
//         }
//       />
//     );
//   },
//   args: {
//     label: "Password",
//     placeholder: "Enter your password",
//     startIcon: <Lock size={18} />,
//   },
// };

// // Form example with multiple fields
// export const FormExample: Story = {
//   render: () => {
//     return (
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "20px",
//           width: "300px",
//         }}
//       >
//         <TextField
//           label="Email"
//           placeholder="Enter your email"
//           startIcon={<Mail size={18} />}
//           required
//         />
//         <TextField
//           label="Password"
//           type="password"
//           placeholder="Enter your password"
//           startIcon={<Lock size={18} />}
//           helperText="Password must be at least 8 characters"
//           required
//         />
//         <button
//           style={{
//             padding: "10px 16px",
//             backgroundColor: "#0070f3",
//             color: "white",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//             fontWeight: "bold",
//           }}
//         >
//           Log in
//         </button>
//       </div>
//     );
//   },
// };
/////////////////////////////////////////////////////
// Third
/////////////////////////////////////////////////////
import React from "react";
// import { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";
import { ThemeProvider } from "../../themes/ThemeProvider";

// Icons for demonstration
const EmailIcon = () => (
  <>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 4H3C2.44772 4 2 4.44772 2 5V15C2 15.5523 2.44772 16 3 16H17C17.5523 16 18 15.5523 18 15V5C18 4.44772 17.5523 4 17 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 5L10 11L18 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </>
);

const LocationIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 10.8333C11.3807 10.8333 12.5 9.71404 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71404 8.61929 10.8333 10 10.8333Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 18.3333C13.3333 15 16.6667 12.0152 16.6667 8.33329C16.6667 4.65139 13.6819 1.66663 10 1.66663C6.31811 1.66663 3.33334 4.65139 3.33334 8.33329C3.33334 12.0152 6.66668 15 10 18.3333Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0653 12.8512 14.2174 12.5 13.3334 12.5H6.66671C5.78265 12.5 4.93481 12.8512 4.30968 13.4763C3.68456 14.1014 3.33337 14.9493 3.33337 15.8333V17.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 10 2.5C8.15906 2.5 6.66667 3.99238 6.66667 5.83333C6.66667 7.67428 8.15906 9.16667 10 9.16667Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
///
// const meta = {
//   title: "Components/TextField",
//   component: TextField,
// };

// export const Default = {
//   args: {},
// };
///

const meta = {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible and accessible text field component that supports various states, themes, and variants.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: "300px" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    label: {
      control: "text",
      description: "The label for the text field",
    },
    helperText: {
      control: "text",
      description: "Helper text displayed below the input",
    },
    error: {
      control: "boolean",
      description: "Whether the field is in an error state",
    },
    errorMessage: {
      control: "text",
      description: "Error message to display when error is true",
    },
    required: {
      control: "boolean",
      description: "Whether the field is required",
    },
    disabled: {
      control: "boolean",
      description: "Whether the field is disabled",
    },
    variant: {
      control: { type: "select" },
      options: ["outlined", "filled", "standard"],
      description: "The variant of the text field",
    },
    labelPosition: {
      control: { type: "select" },
      options: ["top", "inside"],
      description: "Position of the label",
    },
    theme: {
      control: { type: "select" },
      options: ["light", "dark", "high-contrast"],
      description: "Theme of the text field",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number", "tel", "url"],
      description: "The type of the input",
    },
  },
  args: {
    label: "Label",
    helperText: "Helper text",
    error: false,
    errorMessage: "Error message",
    required: false,
    disabled: false,
    variant: "outlined",
    labelPosition: "top",
    theme: "light",
    placeholder: "Placeholder",
    type: "text",
  },
};

export default meta;
// type Story = StoryObj<typeof TextField>;

// Base TextField
export const Default = {
  args: {},
};

// Email Field
export const Email = {
  args: {
    label: "Email",
    helperText: "Enter your email address",
    startIcon: <EmailIcon />,
    placeholder: "example@company.com",
    type: "email",
  },
  parameters: {
    docs: {
      description: {
        story: "A text field optimized for email input with an email icon.",
      },
    },
  },
};

// Address Field
export const Address = {
  args: {
    label: "Address",
    helperText: "Enter your full address",
    startIcon: <LocationIcon />,
    placeholder: "123 Main St, City, State",
  },
  parameters: {
    docs: {
      description: {
        story: "A text field optimized for address input with a location icon.",
      },
    },
  },
};

// User ID Field
export const UserId = {
  args: {
    label: "User ID",
    helperText: "Enter your user ID",
    startIcon: <UserIcon />,
    placeholder: "user123",
  },
  parameters: {
    docs: {
      description: {
        story: "A text field optimized for user ID input with a user icon.",
      },
    },
  },
};

// Required Field
export const Required = {
  args: {
    label: "Required Field",
    required: true,
    helperText: "This field is required",
  },
};

// Error State
export const WithError = {
  args: {
    label: "Email",
    error: true,
    errorMessage: "Please enter a valid email address",
    value: "invalid-email",
    type: "email",
  },
};

// Disabled State
export const Disabled = {
  args: {
    label: "Disabled Field",
    disabled: true,
    value: "This field is disabled",
  },
};

// Inside Label Variant
export const InsideLabel = {
  args: {
    label: "Inside Label",
    labelPosition: "inside",
  },
};

// Different Variants
export const Variants = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TextField label="Outlined Variant" variant="outlined" />
      <TextField label="Filled Variant" variant="filled" />
      <TextField label="Standard Variant" variant="standard" />
    </div>
  ),
};

// Different Themes
export const Themes = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TextField label="Light Theme" theme="light" />
      <div style={{ padding: "16px", backgroundColor: "#121212" }}>
        <TextField label="Dark Theme" theme="dark" />
      </div>
      <div style={{ padding: "16px", backgroundColor: "#000000" }}>
        <TextField label="High Contrast Theme" theme="high-contrast" />
      </div>
    </div>
  ),
};

// Responsive Demo
export const Responsive = {
  render: () => (
    <div>
      <div style={{ width: "300px", marginBottom: "16px" }}>
        <TextField label="Desktop Width" />
      </div>
      <div style={{ width: "200px" }}>
        <TextField label="Mobile Width" />
      </div>
    </div>
  ),
};

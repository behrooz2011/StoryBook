// import React, { useState } from "react";
// import { TextField } from "./components/TextField";
// // import { TextField } from "./components/TextField";

// const App = () => {
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");

//   const validateEmail = (email: string) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setEmail(value);

//     if (value && !validateEmail(value)) {
//       setEmailError("Please enter a valid email address");
//     } else {
//       setEmailError("");
//     }
//   };

//   const EmailIcon = () => (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
//         fill="#6B6C72"
//       />
//     </svg>
//   );

//   return (
//     <div>
//       <h1>Form Example</h1>
//       <form>
//         <TextField
//           id="email-field"
//           label="Email"
//           type="email"
//           placeholder="Enter your email address"
//           // helperText="We'll only use this for communication purposes."
//           value={email}
//           onChange={handleEmailChange}
//           error={emailError}
//           required
//           endIcon={<EmailIcon />}
//         />

//         <TextField
//           id="user-id"
//           label="User ID"
//           placeholder="Enter your user ID"
//           helperText="Your user ID can be found in your profile settings."
//           required
//         />

//         <TextField
//           id="address"
//           label="Street address"
//           placeholder="Enter your address"
//           fullWidth
//         />
//       </form>
//     </div>
//   );
// };

// export default App;

////////////////////////////////////////////////
// src/App.tsx
import React, { useState } from "react";
import "./App.css";
import TextField from "./components/TextField";
import { ThemeProvider, ThemeName } from "./themes/ThemeProvider";

// Simple icon components
const EmailIcon = () => (
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

function App() {
  const [theme, setTheme] = useState<ThemeName>("light");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [userId, setUserId] = useState("");
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(value !== "" && !validateEmail(value));
  };

  return (
    <ThemeProvider initialTheme={theme}>
      <div className="App">
        <header className="App-header">
          <h1>Intuit Design System - Text Field Component</h1>

          <div className="theme-selector">
            <label>
              <input
                type="radio"
                value="light"
                checked={theme === "light"}
                onChange={() => setTheme("light")}
              />
              Light
            </label>
            <label>
              <input
                type="radio"
                value="dark"
                checked={theme === "dark"}
                onChange={() => setTheme("dark")}
              />
              Dark
            </label>
            <label>
              <input
                type="radio"
                value="high-contrast"
                checked={theme === "high-contrast"}
                onChange={() => setTheme("high-contrast")}
              />
              High Contrast
            </label>
          </div>
        </header>

        <main className={`App-main App-main--${theme}`}>
          <div className="form-container">
            <h2>Form Demo</h2>

            <div className="field-container">
              <TextField
                label="Email"
                helperText="We'll never share your email"
                startIcon={<EmailIcon />}
                placeholder="example@email.com"
                required
                type="email"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                errorMessage="Please enter a valid email address"
                theme={theme}
              />
            </div>

            <div className="field-container">
              <TextField
                label="Address"
                helperText="Enter your full address"
                startIcon={<LocationIcon />}
                placeholder="123 Main St, City, State"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                theme={theme}
              />
            </div>

            <div className="field-container">
              <TextField
                label="User ID"
                helperText="Choose a unique user ID"
                startIcon={<UserIcon />}
                placeholder="user123"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                theme={theme}
              />
            </div>

            <div className="field-container">
              <TextField
                label="Inside Label Demo"
                labelPosition="inside"
                theme={theme}
              />
            </div>

            <div className="variants-container">
              <h3>Variants</h3>
              <div className="field-container">
                <TextField
                  label="Outlined (Default)"
                  variant="outlined"
                  theme={theme}
                />
              </div>

              <div className="field-container">
                <TextField label="Filled" variant="filled" theme={theme} />
              </div>

              <div className="field-container">
                <TextField label="Standard" variant="standard" theme={theme} />
              </div>
            </div>

            <div className="states-container">
              <h3>States</h3>
              <div className="field-container">
                <TextField
                  label="Disabled State"
                  disabled
                  value="This field is disabled"
                  theme={theme}
                />
              </div>

              <div className="field-container">
                <TextField
                  label="Error State"
                  error
                  errorMessage="This field has an error"
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

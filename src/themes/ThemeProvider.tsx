// src/themes/ThemeProvider.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import "./build/variables.css";

export type ThemeName = "light" | "dark" | "high-contrast";

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: ThemeName;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = "light",
}) => {
  const [theme, setTheme] = useState<ThemeName>(initialTheme);

  // Apply theme to body for global styles
  React.useEffect(() => {
    document.body.setAttribute("data-theme", theme);

    // Clean up when component unmounts
    return () => {
      document.body.removeAttribute("data-theme");
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// export default ThemeProvider;

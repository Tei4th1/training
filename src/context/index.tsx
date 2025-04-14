import { createContext, useContext, useState } from "react";

export type Theme = {
  mode: "light" | "dark";
  colors: {
    bg: string;
    text: string;
  };
};

const defaultTheme: Theme = {
  mode: "light",
  colors: {
    bg: "azure",
    text: "#000",
  },
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    setTheme((prev) => ({
      mode: prev.mode === "light" ? "dark" : "light",
      colors:
        prev.mode === "light"
          ? { bg: "#1a1a1a", text: "#fff" }
          : { bg: "azure", text: "#000" },
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

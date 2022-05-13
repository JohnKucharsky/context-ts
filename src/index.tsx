import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import One from "./One";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
export type one = {
  theme: { foreground: string; background: string };
  switchTheme: () => void;
};

export const ThemeContext = React.createContext({} as one);

const App = () => {
  const [theme, setTheme] = useState(themes.light);

  const switchTheme = () => {
    if (theme === themes.light) return setTheme(themes.dark);
    if (theme === themes.dark) return setTheme(themes.light);
  };
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <One />
    </ThemeContext.Provider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

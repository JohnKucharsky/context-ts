import { useContext } from "react";
import { ThemeContext } from "./index";

const Two = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => switchTheme()}
      style={{ background: theme.background, color: theme.foreground }}
    >
      I am styled by theme context!
    </button>
  );
};

export default Two;

import { ThemeBg } from "./components/ThemeBg";
import { ThemeButton } from "./components/themeButton";
import { useTheme } from "./context";

export function ThemeSwitch() {
  const { toggleTheme } = useTheme();

  return (
    <ThemeBg>
      <ThemeButton onClick={toggleTheme}></ThemeButton>
      <h1>hi</h1>
    </ThemeBg>
  );
}

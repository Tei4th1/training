import { ThemeProvider, useTheme } from "./context";
import "./App.css";
import ButtonColor from "./Button";
import { Container } from "./components/Container";
import { ThemeSwitch } from "./ThemeSwitch";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

function ThemedApp() {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <Container>
        <ButtonColor />
        <ThemeSwitch />
      </Container>
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;

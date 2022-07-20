import { ThemeProvider } from "styled-components";
import HomePage from "./components/HomePage";
import theme from "./styled-components/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;

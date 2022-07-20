import { ThemeProvider } from "styled-components";
import HomePage from "./components/HomePage";
import theme from "./styled-components/theme";
import Title from "./styled-components/Title";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;

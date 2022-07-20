import { ThemeProvider } from "styled-components";
import theme from "./styled-components/theme";
import Title from "./styled-components/Title";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Title>Hello World!</Title>
    </ThemeProvider>
  );
}

export default App;

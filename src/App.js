import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AuthenticationPage from "./components/AuthenticationPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import PostPage from "./components/PostPage";
import theme from "./styled-components/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthenticationPage />} />
          <Route path="/signup" element={<AuthenticationPage />} />
          <Route path="post/:postId" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

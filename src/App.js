import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AuthenticationPage from "./components/AuthenticationPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import PostPage from "./components/PostPage";
import theme from "./styled-components/theme";

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const getUser = async (token) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 401) {
      return;
    }
    let data = await response.json();
    return data;
  };

  const logOut = async () => {
    localStorage.clear();
    setUser(null);
  };

  useEffect(() => {
    if (token === null) {
      setToken(JSON.parse(localStorage.getItem("token")));
      return;
    }
    localStorage.setItem("token", JSON.stringify(token));
    getUser(token).then((data) => setUser(data));
  }, [token]);

  useEffect(() => {
    getUser(JSON.parse(localStorage.getItem("token"))).then((data) =>
      setUser(data)
    );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar user={user} logOut={logOut} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={<AuthenticationPage isLogIn={true} setToken={setToken} />}
          />
          <Route
            path="/signup"
            element={<AuthenticationPage isLogIn={false} setToken={setToken} />}
          />
          <Route path="posts/:postId" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

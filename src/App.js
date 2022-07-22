import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AuthenticationPage from "./components/AuthenticationPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import PostPage from "./components/PostPage";
import { AuthContext } from "./contexts/AuthContext";
import darkTheme from "./styles/darkTheme";
import lightTheme from "./styles/lightTheme";

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
    setToken(null);
  };

  useEffect(() => {
    if (token === null) {
      setToken(JSON.parse(localStorage.getItem("token")));
      return;
    }
    if (JSON.parse(localStorage.getItem("token")) !== token) {
      localStorage.setItem("token", JSON.stringify(token));
      getUser(token).then((data) => setUser(data));
    }
  }, [token]);

  useEffect(() => {
    if (!user) {
      getUser(JSON.parse(localStorage.getItem("token"))).then((data) =>
        setUser(data)
      );
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, token }}>
      <ThemeProvider theme={darkTheme}>
        <Navbar logOut={logOut} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={
                <AuthenticationPage isLogIn={true} setToken={setToken} />
              }
            />
            <Route
              path="/signup"
              element={
                <AuthenticationPage isLogIn={false} setToken={setToken} />
              }
            />
            <Route path="posts/:postId" element={<PostPage token={token} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;

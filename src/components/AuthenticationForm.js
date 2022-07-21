import { useRef, useState } from "react";
import Button from "../styled-components/Button";
import Form from "../styled-components/Form";
import Heading from "../styled-components/Heading";
import Input from "../styled-components/Input";
import Paragraph from "../styled-components/Paragraph";

function AuthenticationForm({ isLogIn, setToken }) {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  const [errorMessage, setErrorMessage] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    const jsonBody = {
      username: usernameInput.current.value,
      password: passwordInput.current.value,
    };
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonBody),
      }
    );
    const data = await response.json();
    if (!data?.token) {
      setErrorMessage("Wrong Password or Username.");
    } else {
      setToken(data.token);
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <Heading>{isLogIn ? "Log In" : "Sign Up"}</Heading>
      <Input placeholder="Username" name="username" ref={usernameInput} />
      <Input
        placeholder="password"
        name="password"
        ref={passwordInput}
        type="password"
      />
      <Button>{isLogIn ? "Log In" : "Sign Up"}</Button>
      {errorMessage && <Paragraph>{errorMessage}</Paragraph>}
    </Form>
  );
}

export default AuthenticationForm;

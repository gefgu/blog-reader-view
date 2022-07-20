import Button from "../styled-components/Button";
import Form from "../styled-components/Form";
import Heading from "../styled-components/Heading";
import Input from "../styled-components/Input";

function AuthenticationForm({isLogIn}) {
  return (
    <Form>
      <Heading>{isLogIn ? "Log In" : "Sign Up"}</Heading>
      <Input placeholder="Username" name="username" />
      <Input placeholder="password" name="password" type="password" />
      <Button>{isLogIn ? "Log In" : "Sign Up"}</Button>
    </Form>
  );
}

export default AuthenticationForm;

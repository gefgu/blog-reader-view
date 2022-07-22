import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Anchor from "../styled-components/Anchor";
import Button from "../styled-components/Button";
import Flex from "../styled-components/Flex";
import Nav from "../styled-components/Nav";
import SubHeading from "../styled-components/SubHeading";

function Navbar({ logOut, isDarkTheme, setIsDarkTheme }) {
  const { user } = useContext(AuthContext);

  return (
    <Nav>
      <Anchor href="/">Home</Anchor>
      <Button onClick={(e) => setIsDarkTheme(!isDarkTheme)}>
        {isDarkTheme ? "Light Theme" : "Dark Theme"}
      </Button>
      {user ? (
        <Flex>
          <SubHeading>{user.username}</SubHeading>
          <Button onClick={logOut}>Log Out</Button>
        </Flex>
      ) : (
        <Flex>
          <Anchor href="/login">
            <Button>Log In</Button>
          </Anchor>
          <Anchor href="/signup">
            <Button>Sign Up</Button>
          </Anchor>
        </Flex>
      )}
    </Nav>
  );
}

export default Navbar;

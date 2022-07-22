import { useContext } from "react";
import { Link } from "react-router-dom";
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
      <Anchor>
        <Link to="/">Home</Link>
      </Anchor>
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
          <Anchor>
            <Link to="/login">
              <Button>Log In</Button>
            </Link>
          </Anchor>
          <Anchor >
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </Anchor>
        </Flex>
      )}
    </Nav>
  );
}

export default Navbar;

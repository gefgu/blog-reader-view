import Anchor from "../styled-components/Anchor";
import Button from "../styled-components/Button";
import Flex from "../styled-components/Flex";
import Nav from "../styled-components/Nav";

function Navbar({ user }) {
  return (
    <Nav>
      <Anchor href="/">Home</Anchor>
      {user ? (
        user.username
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

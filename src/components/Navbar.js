import styled from "styled-components";
import Anchor from "../styled-components/Anchor";
import Button from "../styled-components/Button";
import Nav from "../styled-components/Nav";

function Navbar() {
  const Flex = styled.div`
    display: flex;
    gap: 16px;
  `;

  return (
    <Nav>
      <Anchor href="/">Home</Anchor>
      <Flex>
        <Anchor href="/login">
          <Button>Log In</Button>
        </Anchor>
        <Anchor href="/signup">
          <Button>Sign Up</Button>
        </Anchor>
      </Flex>
    </Nav>
  );
}

export default Navbar;

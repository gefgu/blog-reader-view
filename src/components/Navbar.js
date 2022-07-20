import styled from "styled-components";
import Anchor from "../styled-components/Anchor";
import Button from "../styled-components/Button";
import Nav from "../styled-components/Nav";

function Navbar() {
  const Flex = styled.div`
    display: flex;
    gap: 8px;
  `;

  return (
    <Nav>
      <Anchor href="/">Home</Anchor>
      <Flex>
        <Button>Log In</Button>
        <Button>Sign Up</Button>
      </Flex>
    </Nav>
  );
}

export default Navbar;

import styled from "styled-components";

const Anchor = styled.a`
  color: ${(props) => props.theme.primaryColor};
  font-family: ${(props) => props.theme.primaryFont};
  text-decoration: none;
`;

export default Anchor;

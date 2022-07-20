import styled from "styled-components";

const Anchor = styled.a`
  color: ${(props) => props.theme.primaryColor};
  font-family: ${(props) => props.theme.primaryFont};
  text-decoration: none;
  font-size: 1.25rem;
`;

export default Anchor;

import styled from "styled-components";

const Button = styled.button`
  margin: 0;
  padding: 8px 16px;
  border: solid 1px ${(props) => props.theme.secondaryColor};
  border-radius: 0.25rem;
  font-family: ${(props) => props.theme.primaryFont};
`;

export default Button;

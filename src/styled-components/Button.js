import styled from "styled-components";

const Button = styled.button`
  display: block;
  margin: 16px 0 16px auto;
  padding: 12px 28px;
  border: solid 1px ${(props) => props.theme.secondaryColor};
  border-radius: 0.25rem;
  font-family: ${(props) => props.theme.primaryFont};
`;

export default Button;

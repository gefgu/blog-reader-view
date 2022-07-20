import styled from "styled-components";

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin: 0 0;
  color: ${(props) => props.theme.primaryColor};
  font-family: ${(props) => props.theme.primaryFont};
`;

export default Title;

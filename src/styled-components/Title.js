import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: red;
  font-family: ${(props) => props.theme.primaryFont};
`;

export default Title;

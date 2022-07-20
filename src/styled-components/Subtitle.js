import styled from "styled-components";

const Subtitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 0 0;
  color: ${(props) => props.theme.secondaryColor};
  font-family: ${(props) => props.theme.secondaryFont};
`;

export default Subtitle;

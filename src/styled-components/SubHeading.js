import styled from "styled-components";

const SubHeading = styled.h4`
  font-size: 1rem;
  color: ${(props) => props.theme.secondaryColor};
  font-family: ${(props) => props.theme.secondaryFont};
`;

export default SubHeading;

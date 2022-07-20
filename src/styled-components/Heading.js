import styled from "styled-components";

const Heading = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.primaryColor};
  font-family: ${(props) => props.theme.primaryFont};
`;

export default Heading;

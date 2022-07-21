import styled from "styled-components";

const Box = styled.div`
  border: 1px solid ${(props) => props.theme.secondaryColor};
  border-radius: 0.25rem;
  padding: 12px;
`;

export default Box;

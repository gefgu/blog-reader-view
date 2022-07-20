import styled from "styled-components";

const Paragraph = styled.p`
  font-size: 1.15rem;
  margin-top: 16px;
  line-height: 2;
  text-align: justify;
  color: ${(props) => props.theme.primaryColor};
  font-family: ${(props) => props.theme.secondaryFont};
`;

export default Paragraph;

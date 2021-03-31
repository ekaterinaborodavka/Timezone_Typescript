import styled from "styled-components/macro";

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  width: 100%;
  text-align: center;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.textColor};
  padding: 1rem 0 2rem 0;
  margin: 0 0 2rem 0;
`;

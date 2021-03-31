import styled from "styled-components/macro";

export const ThemeButtonsWrapper = styled.div`
  display: flex;
  padding: 0.3rem 0 0 47%;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.main};
`;

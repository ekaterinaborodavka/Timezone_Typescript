import styled, { css } from "styled-components/macro";
import { SynchronizeButtonSizes, SynchronizeButtonColors, SynchronizeButtonProps } from "~src/type";

const buttonSizeCSSMapping = {
  [SynchronizeButtonSizes.large]: css`
    width: 25%;
    font-size: 1.1rem;
  `,
  [SynchronizeButtonSizes.medium]: css`
    width: 20%;
    font-size: 1rem;
  `,
  [SynchronizeButtonSizes.small]: css`
    width: 15%;
    font-size: 0.9rem;
  `,
};

const buttonColorsdeCSSMapping = {
  [SynchronizeButtonColors.green]: css`
    color: rgb(45, 90, 45);
    border: 2px solid rgb(45, 90, 45);
  `,
  [SynchronizeButtonColors.blue]: css`
    color: rgb(99, 99, 170);
    border: 2px solid rgb(99, 99, 170);
  `,
  [SynchronizeButtonColors.orange]: css`
    color: rgb(184, 110, 42);
    border: 2px solid rgb(184, 110, 42);
  `,
  [SynchronizeButtonColors.gray]: css`
    color: rgb(145, 145, 145);
    border: 2px solid rgb(145, 145, 145);
  `,
};

export const SynchronizeButton = styled.button<SynchronizeButtonProps>`
  margin: auto;
  margin-top: 5%;
  padding: 0.5rem;
  background-color: transparent;
  border-radius: 15px;
  font-weight: bold;
  :hover {
    opacity: 0.7;
  }
  ${({ size = SynchronizeButtonSizes.medium }) => {
    return buttonSizeCSSMapping[size];
  }}
  ${({ color = SynchronizeButtonColors.green }) => {
    return buttonColorsdeCSSMapping[color];
  }}
`;

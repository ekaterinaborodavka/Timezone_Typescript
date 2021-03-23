import styled, { css } from "styled-components/macro";

export enum SynchronizeButtonSizes {
  // eslint-disable-next-line no-unused-vars
  large,
  // eslint-disable-next-line no-unused-vars
  medium,
  // eslint-disable-next-line no-unused-vars
  small,
}
export interface SynchronizeButtonProps {
  size: SynchronizeButtonSizes;
  label?: string;
}

export const SynchronizeButton = styled.button<SynchronizeButtonProps>`
  margin: auto;
  margin-top: 5%;
  padding: 0.5rem;
  border: 2px solid rgb(45, 90, 45);
  background-color: transparent;
  border-radius: 15px;
  font-weight: bold;
  color: rgb(45, 90, 45);
  :hover {
    opacity: 0.7;
  }
  ${({ size }) =>
    size === 0 &&
    css`
      width: 25%;
      font-size: 1.1rem;
    `}
  ${({ size }) =>
    size === 1 &&
    css`
      width: 20%;
      font-size: 1rem;
    `}
  ${({ size }) =>
    size === 2 &&
    css`
      width: 15%;
      font-size: 0.9rem;
    `}
`;

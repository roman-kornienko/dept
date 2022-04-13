import styled, { css } from "styled-components";
import { black, blue, white, gray4 } from "../../colors";

const StyledSecondary = css`
  background-color: transparent;
  padding: 0;
  margin: 0;
  color: ${blue};
  font-weight: 600;
`;

interface IStyledPrimary {
  blueButton?: boolean;
}
const StyledPrimary = css<IStyledPrimary>`
  padding: 10px 25px;
  transition: background-color 0.3s;

  background-color: ${black};
  color: ${white};

  &:hover {
    background-color: ${gray4};
  }

  ${({ blueButton }) =>
    blueButton &&
    `
    background-color: ${blue};
    color: ${white};
  `}
`;

type buttonTypes = "primary" | "secondary";

const typeSwitcher = (buttonType: buttonTypes) => {
  switch (buttonType) {
    case "primary":
      return StyledPrimary;
    case "secondary":
      return StyledSecondary;
  }
};

interface IStyledButton {
  buttonType: buttonTypes;
  children?: React.ReactNode;
  blueButton?: boolean;
}
export const StyledButton = styled.button<IStyledButton>`
  border: 0;
  cursor: pointer;
  text-transform: uppercase;

  ${({ buttonType }) => typeSwitcher(buttonType)};
`;

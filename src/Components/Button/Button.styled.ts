import styled, { css } from "styled-components";
import { black, blue, white, gray4 } from "../../colors";

interface IStyledPrimary {
  blueButton?: boolean;
}
const StyledPrimary = css<IStyledPrimary>`
  padding: 10px 25px;
  text-transform: uppercase;
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

  ${({ buttonType }) => typeSwitcher(buttonType)};
`;

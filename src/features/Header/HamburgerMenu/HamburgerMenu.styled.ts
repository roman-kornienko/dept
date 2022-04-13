import styled from "styled-components";
import { animated } from "@react-spring/web";
import { black, white } from "../../../colors";

export const StyledHamburgerMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  overflow: hidden;
  background-color: transparent;
  cursor: pointer;
`;

interface IStyledMenuLine {
  $menuIsOpened?: boolean;
}
export const StyledMenuLine = styled(animated.div)<IStyledMenuLine>`
  height: 3px;
  background-color: ${({ $menuIsOpened }) => ($menuIsOpened ? white : black)};
  border-radius: 2px;

  &:nth-child(2) {
    width: 28px;
  }
`;

import { animated } from "@react-spring/web";
import styled, { css } from "styled-components";
import { black, gray3, white } from "../../../colors";
import { StyledTextBody } from "../../../Typography";
import { maxScreensSizesPx } from "../../../constants";

export const StyledNavigation = styled(animated.nav)`
  position: absolute;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  top: 60px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  z-index: 10;
  background-color: ${black};
`;

export const StyledContentWrapper = styled.div`
  max-width: 1340px;
  margin: 0 auto;
  width: 100%;
  background-color: ${black};
`;

export const StyledAnimatedList = styled(animated.ul)`
  list-style: none;
  padding: 0;
  width: 90%;
  margin: 0 auto;
`;

const arrowCss = css`
  content: "";
  width: 0;
  height: 0;
  margin-right: 20px;
  display: inline-block;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 40px solid ${white};
  opacity: 1;
  transition: font-size 0.1s 0s ease, opacity 0.1s 0.1s ease;
`;

export const StyledListItem = styled.li`
  margin: 1rem 0;
  text-align: right;
  cursor: pointer;
  border-bottom: 1px solid ${gray3};

  > p {
    display: flex;
    align-items: center;
    justify-content: end;

    &::before {
      content: "";
      opacity: 0;
      transition: opacity 0.1s 0s ease, font-size 0.1s 0.1s ease;
    }
  }

  &:hover {
    > p::before {
      ${arrowCss}
    }
  }
`;

export const StyledListItemText = styled(StyledTextBody)`
  font-size: 5.25rem;
  font-weight: bold;
  color: ${white};

  @media (max-width: ${maxScreensSizesPx.tablet}) {
    font-size: 4.25rem;
  }

  @media (max-width: ${maxScreensSizesPx.mobile}) {
    font-size: 3.25rem;
  }
`;

export const StyledLandenTitle = styled.div``;

export const StyledLandenNavigator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const StyledListLanden = styled.div`
  color: ${white};
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${black};

  &:hover::before {
    ${arrowCss};
    position: relative;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 20px solid ${white};
    margin-right: 5px;
  }
`;

import { FC } from "react";
import { useTransition } from "@react-spring/web";
import {
  StyledAnimatedList,
  StyledNavigation,
  StyledContentWrapper,
  StyledListItem,
  StyledListItemText,
  StyledLandenNavigator,
  StyledListLanden,
  StyledLandenTitle,
} from "./MenuNavigator.styled";
import { HEADINGS, LANDENS } from "./constants";
import { StyledTextBody } from "../../../Typography";
import { gray2, white } from "../../../colors";

interface MenuNavigatorProps {
  open: boolean;
}

const MenuNavigator: FC<MenuNavigatorProps> = ({ open }) => {
  const transition = useTransition(open, {
    from: {
      opacity: 0,
      transformMain: "translateY(40px)",
      transformFoot: "translateY(200px)",
    },
    enter: {
      opacity: 1,
      transformMain: "translateY(0px)",
      transformFoot: "translateY(0px)",
    },
    leave: {
      opacity: 0,
      transformMain: "translateY(40px)",
      transformFoot: "translateY(200px)",
    },
  });

  return transition(({ opacity, transformMain }, visible) => {
    if (!visible) {
      return null;
    }
    return (
      <StyledNavigation style={{ opacity }}>
        <StyledContentWrapper>
          <StyledAnimatedList style={{ transform: transformMain }}>
            {HEADINGS.map((heading) => (
              <StyledListItem key={heading}>
                <StyledListItemText>{heading}</StyledListItemText>
              </StyledListItem>
            ))}
            <StyledLandenNavigator>
              <StyledLandenTitle>
                <StyledTextBody color={gray2} uppercase>
                  Landen
                </StyledTextBody>
              </StyledLandenTitle>
              {LANDENS.map((landen) => (
                <StyledListLanden key={landen}>
                  <StyledTextBody color={white} uppercase>
                    {landen}
                  </StyledTextBody>
                </StyledListLanden>
              ))}
            </StyledLandenNavigator>
          </StyledAnimatedList>
        </StyledContentWrapper>
      </StyledNavigation>
    );
  });
};

export default MenuNavigator;

import React, { FC, SetStateAction } from "react";
import {
  StyledButton,
  StyledHamburgerMenu,
  StyledMenuLine,
} from "./HamburgerMenu.styled";
import { useSpring } from "@react-spring/web";
import {
  baseSpringStyle,
  CloseHamburgerStyle,
  OpenHamburgerStyle,
} from "./AnimationStyles";
import { StyledTextBody } from "../../../Typography";

interface HamburgerMenuProps {
  open: boolean;
  toggle: React.Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ open, toggle }) => {
  const [styles, api] = useSpring(() => baseSpringStyle);

  const handleClick = () => {
    api.start({
      to: open ? OpenHamburgerStyle : CloseHamburgerStyle,
    });

    toggle(!open);
  };

  return (
    <StyledHamburgerMenu>
      <StyledTextBody>Menu</StyledTextBody>
      <StyledButton onClick={handleClick}>
        <StyledMenuLine
          $menuIsOpened={open}
          style={{
            transform: styles.transformTop,
            width: styles.widthTop,
          }}
        />
        <StyledMenuLine
          $menuIsOpened={open}
          style={{
            transform: styles.transformMiddle,
          }}
        />
        <StyledMenuLine
          $menuIsOpened={open}
          style={{
            transform: styles.transformBottom,
            width: styles.widthBottom,
          }}
        />
      </StyledButton>
    </StyledHamburgerMenu>
  );
};

export default HamburgerMenu;

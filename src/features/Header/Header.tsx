import { useState } from "react";
import {
  StyledLogo,
  StyledHeader,
  StyledHeaderCase,
  StyledHeaderCaseImage,
  StyledHeaderMenu,
  StyledHeaderMenuWrapper,
  StyledHeaderLineWrapper,
  StyledHeaderButton,
  StyledHeaderButtonWrapper,
  StyledHeaderButtonInner,
  StyledHeaderText,
} from "./Header.styled";
import HamburgerMenu from "./HamburgerMenu";
import MenuNavigator from "./MenuNavigator";
import { caseAPI } from "../../services/CaseService";
import { ICase } from "../../models/ICase";

interface IMainCase {
  mainCase: ICase | null;
}

const Header = () => {
  const [open, toggle] = useState<boolean>(false);
  const { mainCase }: IMainCase = caseAPI.useFetchCasesQuery("", {
    selectFromResult: ({ data }) => ({
      mainCase: data?.find((caseItem) => !!caseItem?.main) || null,
    }),
  });

  return (
    <StyledHeader>
      <StyledHeaderMenuWrapper $menuIsOpened={open}>
        <StyledHeaderMenu>
          <StyledHeaderLineWrapper>
            <StyledLogo uppercase bold fontSize={24} open={open}>
              DEPT
            </StyledLogo>
            <HamburgerMenu open={open} toggle={toggle} />
          </StyledHeaderLineWrapper>
          <MenuNavigator open={open} />
        </StyledHeaderMenu>
      </StyledHeaderMenuWrapper>
      {mainCase && (
        <StyledHeaderCase>
          <StyledHeaderCaseImage src={mainCase.image} />
          <StyledHeaderButtonWrapper>
            <StyledHeaderButtonInner>
              <StyledHeaderButton buttonType="primary">
                View Case
              </StyledHeaderButton>
            </StyledHeaderButtonInner>
          </StyledHeaderButtonWrapper>
          <StyledHeaderText>
            Wo
            <br />
            rk
          </StyledHeaderText>
        </StyledHeaderCase>
      )}
    </StyledHeader>
  );
};

export default Header;

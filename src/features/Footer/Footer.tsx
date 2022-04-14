import {
  StyledFooter,
  StyledFooterInner,
  StyledFooterWrapper,
  StyledLogo,
} from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledFooter>
        <StyledFooterInner>
          <StyledLogo uppercase bold fontSize={24}>
            DEPT
          </StyledLogo>
        </StyledFooterInner>
      </StyledFooter>
    </StyledFooterWrapper>
  );
};

export default Footer;

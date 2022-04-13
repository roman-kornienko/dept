import styled from "styled-components";
import { black, gray1, white } from "../../colors";
import { StyledTextBody } from "../../Typography";
import { StyledButton } from "../../components/Button/Button.styled";
import { maxScreensSizesPx } from "../../constants";

export const StyledHeader = styled.div`
  width: 100%;
  max-width: ${maxScreensSizesPx.desktop};
  margin: 0 auto;
  position: relative;
`;

interface IStyledHeaderMenuWrapper {
  $menuIsOpened?: boolean;
}
export const StyledHeaderMenuWrapper = styled.div<IStyledHeaderMenuWrapper>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  padding-top: 20px;
  ${({ $menuIsOpened }) => $menuIsOpened && `background-color: ${black}`}
`;

export const StyledHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
  padding-bottom: 10px;
`;

export const StyledHeaderLineWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${gray1};
`;

interface IStyledLogo {
  open: boolean;
}
export const StyledLogo = styled(StyledTextBody)<IStyledLogo>`
  font-size: 2rem;
  font-weight: bold;
  font-family: sans-serif;
  ${({ open }) => open && `color: ${white}`}
`;

export const StyledHeaderCase = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const StyledHeaderButtonWrapper = styled.div`
  max-width: 1340px;
  margin: 0 auto;
`;

export const StyledHeaderButtonInner = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
`;

export const StyledHeaderCaseImage = styled.img`
  width: 100%;
  max-height: 100vh;
  object-fit: cover;
`;

export const StyledHeaderButton = styled(StyledButton)`
  position: absolute;
  bottom: 50px;
  right: 0;
`;

export const StyledHeaderText = styled.div`
  position: absolute;
  font-size: 15vw;
  top: 20%;
  left: 15%;
  text-transform: uppercase;
  overflow-wrap: break-word;
`;

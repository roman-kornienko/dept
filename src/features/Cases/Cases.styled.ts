import styled from "styled-components";
import { gray3, blue } from "../../colors";
import { StyledButton } from "../../components/Button/Button.styled";
import { maxScreensSizesPx } from "../../constants";

export const StyledCasesWrapper = styled.div``;

export const StyledFiltersWrapper = styled.div``;

export const StyledCases = styled.div`
  max-width: 1340px;
  width: 100%;
  margin: 0 auto;
`;

export const StyledCasesInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
`;

interface IStyledCaseCard {
  $inner?: boolean;
  withLinkedItem?: boolean;
}
export const StyledCaseCard = styled.div<IStyledCaseCard>`
  min-width: 50%;
  flex: 1;
  padding-right: 20px;
  padding-bottom: 60px;

  &:nth-child(2n) {
    padding-left: 20px;
    padding-right: 0;
  }

  ${({ withLinkedItem }) =>
    withLinkedItem &&
    `
    width: 30%;
    min-width: 30%;
    flex: unset;
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${gray3};
    
    > div {
      height: 50%;
      border-bottom: 1px solid ${gray3};
    }
  `};

  ${({ $inner }) =>
    $inner &&
    `
    padding: 0;
    margin: 0;
    width: 100%;
    &:nth-child(2n) {
      padding-left: 0;
    }
  `};

  @media (max-width: ${maxScreensSizesPx.tablet}) {
    min-width: 100%;
    padding-right: 0;

    &:nth-child(2n) {
      padding-left: 0;
      padding-right: 0;
    }

    ${({ withLinkedItem }) =>
      withLinkedItem &&
      `
      > div {
        padding-bottom: 30px;
      }
    `};

    ${({ $inner }) =>
      $inner &&
      `
        margin-top: 60px;
      `};
  }
`;

export const StyledCaseCardInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledButtonWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;

export const StyledButtonViewCase = styled(StyledButton)`
  display: flex;
  align-items: center;

  svg {
    margin-right: 7px;
    fill: ${blue};
    transform: rotate(-90deg);
  }
`;

export const StyledCaseIndustry = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-transform: uppercase;
  color: ${gray3};
`;

export const StyledCaseTitle = styled.div`
  margin-top: 10px;
`;

export const StyledCaseCardImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 500px;
  object-fit: cover;
`;

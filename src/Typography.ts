import styled, { css } from "styled-components";
import { maxScreensSizesPx } from "./constants";
import { black } from "./colors";

interface IStyledTextBody {
  fontSize?: number;
  color?: string;
  bold?: boolean;
  uppercase?: boolean;
}
export const StyledTextBody = styled.p<IStyledTextBody>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px;` : "14px")};
  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : css`
          color: ${black};
        `}
  white-space: pre-wrap;
  font-weight: ${({ bold }) => (bold ? "600;" : "500;")};
  ${({ uppercase }) => uppercase && "text-transform: uppercase;"}
  margin: 0;
  padding: 0;
`;

interface IStyledHeaders {
  noMargin?: boolean;
}
const StyledHeaders = css<IStyledHeaders>`
  ${({ noMargin }) => noMargin && "margin: 0;"}
`;

export const StyledH5 = styled.h5`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  ${StyledHeaders};
`;

export const StyledH4 = styled.h4`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
  ${StyledHeaders};
`;

export const StyledH3 = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: 1px;
  ${StyledHeaders};
`;

export const StyledH2 = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.43;
  ${StyledHeaders};
`;

export const StyledH1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
  line-height: 1;
  ${StyledHeaders};

  @media (max-width: ${maxScreensSizesPx.tablet}) {
    font-size: 24px;
  }
`;

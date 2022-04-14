import { StyledCaseQuote, StyledCaseQuoteInner } from "./Cases.styled";
import { FC } from "react";

interface ICaseQuote {
  text: string;
}

const CaseQuote: FC<ICaseQuote> = ({ text }) => {
  return (
    <StyledCaseQuote>
      <StyledCaseQuoteInner>&quot;{text}&quot;</StyledCaseQuoteInner>
    </StyledCaseQuote>
  );
};

export default CaseQuote;

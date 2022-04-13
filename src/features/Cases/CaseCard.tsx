import { FC } from "react";
import { ICaseWithLinkedItems } from "../../models/ICase";
import {
  StyledButtonViewCase,
  StyledButtonWrapper,
  StyledCaseCard,
  StyledCaseCardImage,
  StyledCaseCardInner,
  StyledCaseIndustry,
  StyledCaseTitle,
} from "./Cases.styled";
import { IconDropdown } from "../../Icons";

interface CaseCardProps {
  caseItem: ICaseWithLinkedItems;
  inner?: boolean;
}

const CaseCard: FC<CaseCardProps> = ({ caseItem, inner }) => {
  return (
    <StyledCaseCard withLinkedItem={!!caseItem.linkedItem} $inner={inner}>
      <StyledCaseCardInner>
        {caseItem.image && <StyledCaseCardImage src={caseItem.image} />}
        <StyledCaseIndustry>{caseItem.industry}</StyledCaseIndustry>
        <StyledCaseTitle>{caseItem.title}</StyledCaseTitle>
        <StyledButtonWrapper>
          <StyledButtonViewCase buttonType="secondary">
            <IconDropdown />
            View case
          </StyledButtonViewCase>
        </StyledButtonWrapper>
      </StyledCaseCardInner>
      {caseItem.linkedItem && <CaseCard caseItem={caseItem.linkedItem} inner />}
    </StyledCaseCard>
  );
};

export default CaseCard;

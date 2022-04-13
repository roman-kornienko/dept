import { caseAPI } from "../../services/CaseService";
import { ICase } from "../../models/ICase";
import {
  StyledCasesWrapper,
  StyledCases,
  StyledCasesInner,
  StyledFiltersWrapper,
} from "./Cases.styled";
import { uniteCasesWithoutImage } from "./utils";
import CaseCard from "./CaseCard";

interface ICases {
  casesData: ICase[] | null;
}
const Cases = () => {
  const { casesData }: ICases = caseAPI.useFetchCasesQuery("", {
    selectFromResult: ({ data }) => ({
      casesData: data ? uniteCasesWithoutImage(data) : null,
    }),
  });

  return (
    <StyledCasesWrapper>
      <StyledFiltersWrapper />
      <StyledCases>
        <StyledCasesInner>
          {casesData?.map((caseItem) => {
            return <CaseCard key={caseItem.id} caseItem={caseItem} />;
          })}
        </StyledCasesInner>
      </StyledCases>
    </StyledCasesWrapper>
  );
};

export default Cases;

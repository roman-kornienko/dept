import { caseAPI } from "../../services/CaseService";
import { ICase, ISelectOption } from "../../models/ICase";
import {
  StyledCasesWrapper,
  StyledCases,
  StyledCasesInner,
  StyledFiltersWrapper,
} from "./Cases.styled";
import { getUniqueValuesByField, uniteCasesWithoutImage } from "./utils";
import CaseCard from "./CaseCard";
import Select from "../../components/Select/Select";
import { useLocation, useNavigate } from "react-router-dom";

interface ICases {
  casesData: ICase[] | null;
  industriesOptions: ISelectOption[] | null;
  categoriesOptions: ISelectOption[] | null;
}
const Cases = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(search);

  const { casesData, industriesOptions, categoriesOptions }: ICases =
    caseAPI.useFetchCasesQuery("", {
      selectFromResult: ({ data }) => {
        return {
          casesData: uniteCasesWithoutImage(data, {
            industry: searchParams.get("industry"),
            category: searchParams.get("category"),
          }),
          industriesOptions: getUniqueValuesByField(data, "industry"),
          categoriesOptions: getUniqueValuesByField(data, "category"),
        };
      },
    });

  const onChangeFilterHandler = (
    value: string,
    option: ISelectOption,
    name: string
  ) => {
    if (!value) {
      searchParams.delete(name);
    } else {
      searchParams.set(name, value);
    }
    navigate({
      search: `?${searchParams.toString()}`,
    });
  };

  return (
    <StyledCasesWrapper>
      <StyledFiltersWrapper>
        Show me
        {categoriesOptions && (
          <Select
            name="category"
            value={searchParams.get("category") || null}
            placeholder="all work"
            options={categoriesOptions}
            onChange={onChangeFilterHandler}
          />
        )}
        in all
        {industriesOptions && (
          <Select
            name="industry"
            value={searchParams.get("industry") || null}
            placeholder="all industries"
            options={industriesOptions}
            onChange={onChangeFilterHandler}
          />
        )}
      </StyledFiltersWrapper>
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

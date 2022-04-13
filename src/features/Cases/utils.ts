import { ICase, ICaseWithLinkedItems, ISelectOption } from "../../models/ICase";

interface ISearchParams {
  industry: string | null;
  category: string | null;
}

export const uniteCasesWithoutImage = (
  data: Array<ICase> | undefined,
  searchParams: ISearchParams
): (ICase | ICaseWithLinkedItems)[] | null => {
  if (!data) {
    return null;
  }

  let countCasesWithoutImageConsecutive = 0;

  return data
    .filter((dataItem: ICase) => {
      if (searchParams.industry && searchParams.category) {
        return (
          dataItem.industry === searchParams.industry &&
          searchParams.category === dataItem.category
        );
      }
      if (searchParams.industry) {
        return dataItem.industry === searchParams.industry;
      }
      if (searchParams.category) {
        return dataItem.category === searchParams.category;
      }
      return true;
    })
    .reduce((acc: (ICaseWithLinkedItems | ICase)[], caseItem: ICase) => {
      if (!!caseItem.image) {
        countCasesWithoutImageConsecutive = 0;
        return [...acc, caseItem];
      }

      if (countCasesWithoutImageConsecutive === 0) {
        countCasesWithoutImageConsecutive += 1;
        return [...acc, caseItem];
      }

      const newAcc = [...acc];
      newAcc.splice(acc.length - 1, 1, {
        ...acc[acc.length - 1],
        linkedItem: caseItem,
      });
      countCasesWithoutImageConsecutive = 0;
      return newAcc;
    }, []);
};

export const getUniqueValuesByField = (
  data: Array<ICase> | undefined,
  field: "category" | "industry"
): Array<ISelectOption> | null => {
  if (!data) {
    return null;
  }

  return data.reduce(
    (acc: ISelectOption[], dataItem: ICase) => {
      const dataItemValue = dataItem?.[field];

      if (
        !dataItemValue ||
        acc.find((accItem) => accItem.value === dataItemValue)
      ) {
        return acc;
      }

      return [
        ...acc,
        {
          value: dataItemValue,
          label: dataItemValue,
        },
      ];
    },
    [
      {
        label: "all",
        value: null,
      },
    ]
  );
};

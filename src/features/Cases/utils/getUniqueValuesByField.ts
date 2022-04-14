import { ICase, ISelectOption } from "../../../models/ICase";

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

import { ICase, ICaseWithLinkedItems } from "../../models/ICase";

export const uniteCasesWithoutImage = (
  data: Array<ICase>
): (ICase | ICaseWithLinkedItems)[] | null => {
  if (!data) {
    return null;
  }

  let countCasesWithoutImageConsecutive = 0;

  return data.reduce(
    (acc: (ICaseWithLinkedItems | ICase)[], caseItem: ICase) => {
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
    },
    []
  );
};

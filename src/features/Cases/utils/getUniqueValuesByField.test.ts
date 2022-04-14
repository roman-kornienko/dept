import { getUniqueValuesByField } from "./getUniqueValuesByField";
import { ICase, ISelectOption } from "../../../models/ICase";

it("getting values by field", () => {
  const data: ICase[] = [
    {
      id: 1,
      image: "/images/bolcom.png",
      main: false,
      title: "A summer island in the Netherlands",
      industry: "Bol.com",
      category: "interactive",
    },
    {
      id: 2,
      image: "/images/kempen.png",
      main: false,
      title: "Not some average banking website",
      industry: "Kempen",
      category: "banking",
    },
    {
      id: 3,
      image: "/images/philips.png",
      main: false,
      title: "Beautiful design meets innovative technology",
      industry: "Philips",
      category: "design",
    },
    {
      id: 4,
      image: "/images/gemeentemuseum.png",
      main: false,
      title: "A 100 years of Mondriaan & De Stijl",
      industry: "Gemeentemuseum",
      category: "design",
    },
    {
      id: 5,
      image: "/images/florensis.png",
      main: true,
      title: "Rethinking the entire online ecosystem",
      industry: "Florensis",
      category: "digital",
    },
  ];
  const result: ISelectOption[] = [
    { label: "all", value: null },
    { value: "interactive", label: "interactive" },
    { value: "banking", label: "banking" },
    { value: "design", label: "design" },
    { value: "digital", label: "digital" },
  ];
  const field = "category";

  console.log(getUniqueValuesByField(data, field));

  expect(getUniqueValuesByField(data, field)).toEqual(result);
});

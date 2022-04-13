import { SingleSelect } from "react-select-material-ui";
import { FC } from "react";
import { StyledSelectWrapper } from "./Select.styeled";
import { ISelectOption } from "../../models/ICase";

interface SelectProps {
  name: string;
  value?: string | null;
  placeholder?: string | undefined;
  options: ISelectOption[];
  onChange?: (
    value: string,
    selectedOption: ISelectOption,
    name: string
  ) => void;
}

const Select: FC<SelectProps> = ({
  name,
  value,
  placeholder,
  options,
  onChange,
}) => {
  const onChangeHandler = (value: any, selectedOption: any) => {
    if (onChange) {
      onChange(value, selectedOption, name);
    }
  };

  return (
    <StyledSelectWrapper>
      {/* @ts-ignore */}
      <SingleSelect
        value={value}
        placeholder={placeholder}
        options={options}
        onChange={onChangeHandler}
        SelectProps={{
          styles: {
            control: (provided: any) => {
              return {
                ...provided,
                border: "unset",
                minHeight: "unset",
                margin: 0,
                width: "max-content",
                cursor: "pointer",
                borderBottom: "1px solid black",
                borderRadius: "unset",
              };
            },
            indicatorSeparator: (provided: any) => {
              return { ...provided, display: "none" };
            },
            dropdownIndicator: (provided: any) => {
              return { ...provided, display: "none" };
            },
            placeholder: (provided: any) => {
              return { ...provided, position: "static", transform: "none" };
            },
            singleValue: (provided: any) => ({
              ...provided,
              position: "static",
              transform: "none",
            }),
            menu: (provided: any) => ({
              ...provided,
              width: "max-content",
              minWidth: "100%",
            }),
          },
        }}
      />
    </StyledSelectWrapper>
  );
};

export default Select;

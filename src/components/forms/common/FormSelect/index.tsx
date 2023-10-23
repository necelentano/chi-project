import { Select, MenuItem } from "@mui/material";
import { UseFormReturn, useController } from "react-hook-form";
import SelectArrow from "../../../../assets/selectArrow.svg?react";

import { useState } from "react";
import ErrorText from "../ErrorText";
import { TSelectOptions } from "../../../../utils/types";

type TFormSelectProps = {
  control: UseFormReturn["control"];
  placeholder: string;
  name: string;
  options: TSelectOptions[] | undefined;
};

const FormSelect = ({
  control,
  placeholder,
  name,
  options,
}: TFormSelectProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name });
  const [value, setValue] = useState("");

  return (
    <>
      <Select
        name={name}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          field.onChange(e.target.value);
        }}
        IconComponent={SelectArrow}
        error={!!error}
        sx={{
          width: "100%",
          borderRadius: "8px",
          backgroundColor: "#FCFDFE",
          fontSize: "14px",
          "& .MuiInputBase-input": {
            py: "14px",
          },
          "& .MuiSelect-icon": {
            marginRight: "16px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "2px solid",
            borderColor: "#F0F1F7",
            borderRadius: "8px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#F0F1F7",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#212121",
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "red",
          },
          "& .MuiSelect-select .notranslate::after": {
            content: `"${placeholder}"`,
            opacity: 0.42,
          },
        }}
      >
        {options &&
          options.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.text}
            </MenuItem>
          ))}
      </Select>
      {error ? <ErrorText>{error.message}</ErrorText> : null}
    </>
  );
};

export default FormSelect;

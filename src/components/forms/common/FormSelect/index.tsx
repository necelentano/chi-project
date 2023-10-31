import { Select, MenuItem } from "@mui/material";
import { UseFormReturn, useController } from "react-hook-form";
import SelectArrow from "../../../../assets/selectArrow.svg?react";

import { useState } from "react";
import ErrorText from "../ErrorText";
import { TSelectOptions } from "../../../../utils/types";

import styles from "./styles";

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
        sx={styles.select(placeholder)}
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

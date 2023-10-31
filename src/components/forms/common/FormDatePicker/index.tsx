import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import DatePickerIcon from "../../../../assets/datePickerIcon.svg?react";

import { UseFormReturn, useController } from "react-hook-form";

import { useState } from "react";
import { Dayjs } from "dayjs";
import ErrorText from "../ErrorText";

import styles from "./styles";

type TFormDatePickerProps = {
  control: UseFormReturn["control"];
  name: string;
};

const FormDatePicker = ({ control, name }: TFormDatePickerProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name });

  const [value, setValue] = useState<Dayjs | null>(null);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          value={value}
          onChange={(e) => {
            setValue(e);
            field.onChange(e);
          }}
          slots={{
            openPickerIcon: DatePickerIcon,
          }}
          slotProps={{
            openPickerButton: {
              sx: styles.openPickerButton,
            },
            textField: {
              error: !!error,
              sx: styles.textField,
            },
          }}
        />
      </LocalizationProvider>
      {error ? <ErrorText>{error.message}</ErrorText> : null}
    </>
  );
};

export default FormDatePicker;

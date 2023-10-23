import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import DatePickerIcon from "../../../../assets/datePickerIcon.svg?react";

import { UseFormReturn, useController } from "react-hook-form";

import { useState } from "react";
import { Dayjs } from "dayjs";
import ErrorText from "../ErrorText";

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
              sx: { mr: "0px" },
            },
            textField: {
              error: !!error,
              sx: {
                input: {
                  "&::placeholder": {
                    opacity: "0.42",
                  },
                },
                color: "red",
                width: "100%",
                borderRadius: "8px",
                backgroundColor: "#FCFDFE",
                fontSize: "14px",
                "& .MuiInputBase-input": {
                  py: "15px",
                  fontSize: "14px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "2px solid",
                    borderColor: "#F0F1F7",
                    borderRadius: "8px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#F0F1F7",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#212121",
                  },
                  "&.Mui-error fieldset": {
                    borderColor: "red",
                  },
                },
              },
            },
          }}
        />
      </LocalizationProvider>
      {error ? <ErrorText>{error.message}</ErrorText> : null}
    </>
  );
};

export default FormDatePicker;

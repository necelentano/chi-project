import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import DatePickerIcon from "../../../../assets/datePickerIcon.svg?react";

import { Control, Controller } from "react-hook-form";
import { AddTicketFormValues } from "../../AddTicketForm";

type TFormDatePickerProps = {
  control: Control<AddTicketFormValues>;
};

const FormDatePicker = ({ control }: TFormDatePickerProps) => {
  return (
    <>
      <Controller
        name="date"
        control={control}
        render={({ field, fieldState: { error } }) => {
          return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                {...field}
                value={field.value ?? null}
                onChange={field.onChange}
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
          );
        }}
      />
    </>
  );
};

export default FormDatePicker;

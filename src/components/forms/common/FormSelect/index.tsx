import { Select, MenuItem } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import SelectArrow from "../../../../assets/selectArrow.svg?react";
import { AddTicketFormValues } from "../../AddTicketForm";

type TFormSelectProps = {
  control: Control<AddTicketFormValues>;
};

const FormSelect = ({ control }: TFormSelectProps) => {
  return (
    <>
      <Controller
        control={control}
        name="priority"
        render={({ field, fieldState: { error } }) => {
          return (
            <Select
              id="priority"
              value={field.value ?? ""}
              onChange={field.onChange}
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
                  content: '"Choose priority"',
                  opacity: 0.42,
                },
              }}
            >
              <MenuItem value={"low"}>Low</MenuItem>
              <MenuItem value={"normal"}>Normal</MenuItem>
              <MenuItem value={"high"}>High</MenuItem>
            </Select>
          );
        }}
      />
    </>
  );
};

export default FormSelect;

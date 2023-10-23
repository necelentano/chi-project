import { useState } from "react";
import { UseFormReturn, useController } from "react-hook-form";

import OutlinedInput from "@mui/material/OutlinedInput";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ErrorText from "../ErrorText";

type TFormInputProps = {
  placeholder: string;
  isPassword: boolean;
  control: UseFormReturn["control"];
  name: string;
  type: string;
  id: string;
};

const FormInput = ({
  placeholder,
  isPassword,
  control,
  name,
  type,
  id,
}: TFormInputProps) => {
  const [textOrPassword, setTextOrPassword] = useState(
    isPassword ? "password" : type
  );

  const handleIconClick = () => {
    return textOrPassword === "password"
      ? setTextOrPassword("text")
      : setTextOrPassword("password");
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    handleIconClick();
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const {
    field,
    fieldState: { error },
  } = useController({ control, name });
  const [value, setValue] = useState("");

  return (
    <>
      <OutlinedInput
        placeholder={placeholder}
        type={textOrPassword}
        error={!!error}
        required
        fullWidth
        id={id}
        endAdornment={
          isPassword ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                sx={{
                  color: "#9FA2B4",
                  mr: "2px",
                }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : null
        }
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          field.onChange(e.target.value);
        }}
        sx={{
          "&.MuiOutlinedInput-root": {
            backgroundColor: "#FCFDFE",
            fontSize: "14px",
          },
          "& .MuiOutlinedInput-input": {
            py: "14px",
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
        }}
      />
      {error ? <ErrorText>{error.message}</ErrorText> : null}
    </>
  );
};

export default FormInput;

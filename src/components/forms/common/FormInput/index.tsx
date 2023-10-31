import { useState } from "react";
import { UseFormReturn, useController } from "react-hook-form";

import OutlinedInput from "@mui/material/OutlinedInput";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ErrorText from "../ErrorText";

import styles from "./styles";

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
                sx={styles.adornmentIconButton}
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
        sx={styles.input}
      />
      {error ? <ErrorText>{error.message}</ErrorText> : null}
    </>
  );
};

export default FormInput;

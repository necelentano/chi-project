import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import InputBase from "@mui/material/InputBase";

type TFormInputProps = {
  placeholder: string;
  isPassword?: boolean;
  register: UseFormRegisterReturn;
  id: string;
  type: string;
};

const FormInput = ({
  placeholder,
  isPassword,
  register,
  id,
  type,
}: TFormInputProps) => {
  const [inputType, setInputType] = useState(isPassword ? "password" : type);

  const handleIconClick = () => {
    return inputType === "password"
      ? setInputType("text")
      : setInputType("password");
  };

  const icon = (
    <VisibilityOffIcon
      sx={{
        color: "#9FA2B4",
        width: "20px",
        height: "20px",
        mr: "16px",
      }}
      onClick={handleIconClick}
    />
  );
  return (
    <InputBase
      sx={{
        "&.MuiInputBase-root": {
          mb: "30px",
          borderRadius: "8px",
          backgroundColor: "#FCFDFE",
          border: "1px solid",
          borderColor: "#F0F1F7",
          py: "8px",
          pl: "16px",
          fontSize: "14px",
        },
      }}
      placeholder={placeholder}
      type={inputType}
      required
      fullWidth
      endAdornment={isPassword ? icon : null}
      id={id}
      {...register}
    />
  );
};

export default FormInput;

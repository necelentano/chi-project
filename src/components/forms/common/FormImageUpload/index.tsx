import { Box, IconButton, Typography, Input } from "@mui/material";

import AddPhotoIcon from "../../../../assets/addPhotoIcon.svg?react";
import {
  FieldValues,
  UseFormReturn,
  UseFormWatch,
  useController,
} from "react-hook-form";

import { useState } from "react";
import ErrorText from "../ErrorText";

type TFormImageUpload = {
  control: UseFormReturn["control"];
  name: string;
  type: string;
  placeholder: string;
  watch: UseFormWatch<FieldValues>;
};

const FormImageUpload = ({
  control,
  name,
  type,
  watch,
  placeholder,
}: TFormImageUpload) => {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name });
  const [value, setValue] = useState("");
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", mt: "32px" }}>
        <IconButton component="label">
          <AddPhotoIcon />
          <Input
            type={type}
            sx={{ display: "none" }}
            inputProps={{ accept: "image/*" }}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValue(e.target.value);
              field.onChange(e.target.files);
            }}
          />
        </IconButton>

        {!watch("image") || (watch("image") as FileList).length === 0 ? (
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              ml: "24px",
            }}
          >
            {placeholder}
          </Typography>
        ) : (
          <Typography sx={{ fontSize: "14px", fontWeight: 600, ml: "24px" }}>
            {(watch("image") as FileList)[0].name}
          </Typography>
        )}
      </Box>
      {error ? <ErrorText>{error.message}</ErrorText> : null}
    </>
  );
};

export default FormImageUpload;

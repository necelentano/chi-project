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

import styles from "./styles";
import { shortImageName } from "../../../../utils/helpers";

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
      <Box sx={styles.wrapper}>
        <IconButton component="label" sx={styles.iconButton}>
          <AddPhotoIcon />
          <Input
            type={type}
            sx={styles.input}
            inputProps={{ accept: "image/*" }}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValue(e.target.value);
              field.onChange(e.target.files);
            }}
          />
        </IconButton>

        {!watch("image") || (watch("image") as FileList).length === 0 ? (
          <Typography sx={styles.text}>{placeholder}</Typography>
        ) : (
          <Typography sx={styles.text}>
            {shortImageName((watch("image") as FileList)[0].name, 20)}
          </Typography>
        )}
      </Box>
      {error ? <ErrorText>{error.message}</ErrorText> : null}
    </>
  );
};

export default FormImageUpload;

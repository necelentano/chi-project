import { Box, IconButton, Typography, Input } from "@mui/material";

import AddPhotoIcon from "../../../../assets/addPhotoIcon.svg?react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { TAddContactFormValues } from "../../AddContactForm";

type TFormImageUpload = {
  register: UseFormRegister<TAddContactFormValues>;
  watch: UseFormWatch<TAddContactFormValues>;
};

const FormImageUpload = ({ register, watch }: TFormImageUpload) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: "32px" }}>
      <IconButton component="label">
        <AddPhotoIcon />
        <Input
          placeholder="Photo"
          id="image"
          type="file"
          {...register("image")}
          sx={{ display: "none" }}
          inputProps={{ accept: "image/*" }}
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
          Add photo
        </Typography>
      ) : (
        <Typography sx={{ fontSize: "14px", fontWeight: 600, ml: "24px" }}>
          {(watch("image") as FileList)[0].name}
        </Typography>
      )}
    </Box>
  );
};

export default FormImageUpload;

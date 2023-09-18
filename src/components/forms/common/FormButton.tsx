import Button from "@mui/material/Button";
import { PropsWithChildren } from "react";

type FormButtonProps = {
  btnType: "text" | "contained";
};

const FormButton = ({
  children,
  btnType,
}: PropsWithChildren<FormButtonProps>) => {
  return (
    <Button
      fullWidth
      variant={btnType === "text" ? "text" : "contained"}
      type="submit"
      sx={[
        {
          "&.MuiButton-contained": {
            borderRadius: "8px",
            color: "#FFFFFF",
            textTransform: "capitalize",
            py: "10px",
          },
        },
        {
          "&.MuiButton-text": {
            borderRadius: "8px",
            color: "primary.text",
            textTransform: "capitalize",
            py: "10px",
          },
        },
      ]}
    >
      {children}
    </Button>
  );
};

export default FormButton;

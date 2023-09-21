import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";

const FormInputWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      {children}
    </Box>
  );
};

export default FormInputWrapper;

import { PropsWithChildren } from "react";

import Box from "@mui/material/Box";

const ErrorText = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={{
        fontSize: "14px",
        color: "red",
        mt: "4px",
        position: "absolute",
      }}
    >
      {children}
    </Box>
  );
};

export default ErrorText;

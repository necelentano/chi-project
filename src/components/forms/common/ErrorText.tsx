import { PropsWithChildren } from "react";

import Box from "@mui/material/Box";

const ErrorText = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={{
        fontSize: "14px",
        color: "red",
        position: "absolute",
        top: "72px",
      }}
    >
      {children}
    </Box>
  );
};

export default ErrorText;

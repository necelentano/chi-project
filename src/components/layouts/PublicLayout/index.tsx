import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";

const PublicLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="bgDark.main"
    >
      {children}
    </Box>
  );
};
export default PublicLayout;

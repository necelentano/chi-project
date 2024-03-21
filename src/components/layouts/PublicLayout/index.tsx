import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../utils/hooks/redux";

const PublicLayout = ({ children }: PropsWithChildren) => {
  const location = useLocation().pathname;
  const user = useAppSelector((state) => state.auth.user);

  return user ? (
    <Navigate to={`/overview`} state={{ from: location }} replace />
  ) : (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100dvh"
      bgcolor="bgDark.main"
    >
      {children}
    </Box>
  );
};
export default PublicLayout;

import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../utils/hooks/redux";

const Protected = ({ children }: PropsWithChildren) => {
  const location = useLocation().pathname;
  const user = useAppSelector((state) => state.auth.user);

  return user ? (
    children
  ) : (
    <Navigate to={`/login`} state={{ from: location }} replace />
  );
};

export default Protected;

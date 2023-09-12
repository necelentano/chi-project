import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ children }: PropsWithChildren) => {
  const location = useLocation().pathname;
  // temporary solution
  const isAuth = true;

  return isAuth ? (
    children
  ) : (
    <Navigate to={`/login`} state={{ from: location }} replace />
  );
};

export default Protected;

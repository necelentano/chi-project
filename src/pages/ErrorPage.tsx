import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <p>
          {error.status} {error.statusText}
        </p>
        <Link to={"/"}>Back to homepage</Link>
      </div>
    );
  }

  return (
    <div>
      <p>{"Unknown Error"}</p>
      <Link to={"/"}>Back to homepage</Link>
    </div>
  );
};

export default ErrorPage;

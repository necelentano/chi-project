import { useEffect } from "react";
import DynamicForm from "../../components/forms/DynamicForm";
import { loginFormData } from "../../components/forms/formsData/login";
import { useLogInMutation } from "../../store/firebaseApi";
import { toast } from "react-toastify";
import { TAuthError } from "../../utils/types";

function Login() {
  const [login, { isLoading, isError, error }] = useLogInMutation();

  useEffect(() => {
    if (isError) {
      toast.error(
        `${(error as TAuthError).name}: ${(error as TAuthError).code}`
      );
    }
  }, [isError, error]);

  return (
    <DynamicForm
      template={loginFormData}
      submitHandler={login}
      isError={isError}
      error={error as TAuthError}
      isLoading={isLoading}
    />
  );
}

export default Login;

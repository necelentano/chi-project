import { useEffect } from "react";
import DynamicForm from "../../components/forms/DynamicForm";
import { loginFormData } from "../../components/forms/formsData/login";
import { useLogInMutation } from "../../store/firebaseApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../utils/hooks/redux";
import { TAuthError, TStoreUser } from "../../utils/types";

function Login() {
  const navigate = useNavigate();
  const user = useAppSelector<TStoreUser>((state) => state.auth.user);
  const [login, { isLoading, isError, error, isSuccess }] = useLogInMutation();

  useEffect(() => {
    if (user) {
      navigate("/dashboard/overview");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Welcome back, ${user?.name}!`);
      navigate("/dashboard/overview");
    }
  }, [isSuccess, navigate, user]);

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

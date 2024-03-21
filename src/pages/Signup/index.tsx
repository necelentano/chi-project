import { useEffect } from "react";
import { toast } from "react-toastify";

import { useSignUpMutation } from "../../store/firebaseApi";

import DynamicForm from "../../components/forms/DynamicForm";
import { signupFormData } from "../../components/forms/formsData/signup";
import { TAuthError } from "../../utils/types";

const Signup = () => {
  const [signup, { isLoading, isError, error }] = useSignUpMutation();

  useEffect(() => {
    if (isError) {
      toast.error(
        `${(error as TAuthError).name}: ${(error as TAuthError).code}`
      );
    }
  }, [isError, error]);

  return (
    <DynamicForm
      template={signupFormData}
      submitHandler={signup}
      isError={isError}
      error={error as TAuthError}
      isLoading={isLoading}
    />
  );
};

export default Signup;

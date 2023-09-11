import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

import PablicLayout from "../components/layouts/PablicLayout";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    id: "Home",
    element: (
      <PablicLayout>
        <Home />
      </PablicLayout>
    ),
    errorElement: (
      <PablicLayout>
        <ErrorPage />
      </PablicLayout>
    ),
  },
  {
    path: "/login",
    id: "Login",
    element: (
      <PablicLayout>
        <Login />
      </PablicLayout>
    ),
  },
  {
    path: "/signup",
    id: "Signup",
    element: (
      <PablicLayout>
        <Signup />
      </PablicLayout>
    ),
  },
  {
    path: "/forgot-password",
    id: "Forgot Password",
    element: (
      <PablicLayout>
        <ForgotPassword />
      </PablicLayout>
    ),
  },
  {
    path: "/reset-password",
    id: "Reset Password",
    element: (
      <PablicLayout>
        <ResetPassword />
      </PablicLayout>
    ),
  },
]);

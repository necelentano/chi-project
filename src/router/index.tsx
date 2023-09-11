import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

import PublicLayout from "../components/layouts/PublicLayout";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    id: "Home",
    element: (
      <PublicLayout>
        <Home />
      </PublicLayout>
    ),
    errorElement: (
      <PublicLayout>
        <ErrorPage />
      </PublicLayout>
    ),
  },
  {
    path: "/login",
    id: "Login",
    element: (
      <PublicLayout>
        <Login />
      </PublicLayout>
    ),
  },
  {
    path: "/signup",
    id: "Signup",
    element: (
      <PublicLayout>
        <Signup />
      </PublicLayout>
    ),
  },
  {
    path: "/forgot-password",
    id: "Forgot Password",
    element: (
      <PublicLayout>
        <ForgotPassword />
      </PublicLayout>
    ),
  },
  {
    path: "/reset-password",
    id: "Reset Password",
    element: (
      <PublicLayout>
        <ResetPassword />
      </PublicLayout>
    ),
  },
]);

import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Dashboard from "../pages/dashboard/Dashboard";
import Overview from "../pages/dashboard/Overview";
import Tickets from "../pages/dashboard/Tickets";
import Ideas from "../pages/dashboard/Ideas";
import Contacts from "../pages/dashboard/Contacts";
import Agents from "../pages/dashboard/Agents";
import Articles from "../pages/dashboard/Articles";
import Settings from "../pages/dashboard/Settings";
import Subscription from "../pages/dashboard/Subscription";

import PublicLayout from "../components/layouts/PublicLayout";
import Protected from "../components/Protected";

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
  {
    path: "/dashboard",
    id: "Dashboard",
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Overview />,
          },
          {
            path: "/dashboard/tickets",
            id: "Dashboard Tickets",
            element: <Tickets />,
          },
          {
            path: "/dashboard/ideas",
            id: "Dashboard Ideas",
            element: <Ideas />,
          },
          {
            path: "/dashboard/contacts",
            id: "Dashboard Contacts",
            element: <Contacts />,
          },
          {
            path: "/dashboard/agents",
            id: "Dashboard Agents",
            element: <Agents />,
          },
          {
            path: "/dashboard/articles",
            id: "Dashboard Articles",
            element: <Articles />,
          },
          {
            path: "/dashboard/settings",
            id: "Dashboard Settings",
            element: <Settings />,
          },
          {
            path: "/dashboard/subscription",
            id: "Dashboard Subscription",
            element: <Subscription />,
          },
        ],
      },
    ],
  },
]);

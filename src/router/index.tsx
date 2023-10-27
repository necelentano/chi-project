/* eslint-disable react-refresh/only-export-components */
import React from "react";

const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));
const Home = React.lazy(() => import("../pages/Home"));
const Login = React.lazy(() => import("../pages/Login"));
const Signup = React.lazy(() => import("../pages/Signup"));
const ForgotPassword = React.lazy(() => import("../pages/ForgorPassword"));
const ResetPassword = React.lazy(() => import("../pages/ResetPassword"));
const Dashboard = React.lazy(() => import("../pages/dashboard/DashboardRoot"));
const Overview = React.lazy(() => import("../pages/dashboard/Overview"));
const Tickets = React.lazy(() => import("../pages/dashboard/Tickets"));
const Ideas = React.lazy(() => import("../pages/dashboard/Ideas"));
const Contacts = React.lazy(() => import("../pages/dashboard/Contacts"));
const Agents = React.lazy(() => import("../pages/dashboard/Agents"));
const Articles = React.lazy(() => import("../pages/dashboard/Articles"));
const Settings = React.lazy(() => import("../pages/dashboard/Settings"));
const Subscription = React.lazy(
  () => import("../pages/dashboard/Subscription")
);
const PublicLayout = React.lazy(
  () => import("../components/layouts/PublicLayout")
);
const Protected = React.lazy(() => import("../components/Protected"));

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
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
            path: "/dashboard/overview",
            id: "Dashboard Overview",
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
          {
            path: "/dashboard/settings/reset-password",
            id: "Settings Reset Password",
            element: <ResetPassword />,
          },
        ],
      },
    ],
  },
]);

export default router;

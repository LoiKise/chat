import React, { lazy } from "react";

const PageNotFound = lazy(() =>
  import("../components/PageNotFound/PageNotFound")
);
const ScreenHome = lazy(() => import("../components/Home"));
const ScreenAbout = lazy(() => import("../components/About"));
const ScreenContact = lazy(() => import("../components/Contact"));
const LoginDashboardScreen = lazy(() =>
  import("../components/Admin/Login/Login")
);
const Dashboard = lazy(() => import("../components/Admin/Dashboard/Dashboard"));
const Recruiment = lazy(() => import("../components/Recruiment"));
const Login = lazy(() => import("../components/Login"));
const Register = lazy(() => import("../components/Register"));

const index = [
  {
    path: "/",
    exact: true,
    main: () => <ScreenHome />,
  },

  {
    path: "/recruiment",
    main: () => <Recruiment />,
  },
  {
    path: "/register",
    main: () => <Register />,
  },
  {
    path: "/login",
    main: () => <Login />,
  },
  {
    path: "/About",
    exact: true,
    main: () => <ScreenAbout />,
  },
  {
    path: "/Contact",
    exact: true,
    main: () => <ScreenContact />,
  },
  {
    path: "/Dashboard",
    exact: true,
    main: () => <LoginDashboardScreen />,
  },
  {
    path: "/Admin/Dashboard",
    exact: true,
    main: () => <Dashboard />,
  },
  {
    path: "",
    exact: true,
    main: () => <PageNotFound />,
  },
];
export default index;

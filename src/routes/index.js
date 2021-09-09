<<<<<<< HEAD
import React from "react";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import ScreenHome from "../components/Home";
import ScreenAbout from "../components/About";
import ScreenContact from "../components/Contact";
import LoginDashboardScreen from "../components/Admin/Login/Login";
import Dashboard from "../components/Admin/Dashboard/Dashboard";
import Recruiment from "../components/Recruiment";
import Login from "../components/Login";
import Register from "../components/Register";
import ScreenService from "../components/Service";
=======
import React, { lazy, Suspense } from "react";
import Fallback from "../components/Fallback";
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
const Recruitment = lazy(() => import("../components/Recruitment/Index"));
const Login = lazy(() => import("../components/Login"));
const Register = lazy(() => import("../components/Register"));
>>>>>>> 2a8dda04b2891eaf71a259a54d88cf58cc15e398
const index = [
  {
    path: "/",
    exact: true,
    main: () => (
      <Suspense key={index} fallback={<Fallback />}>
        <ScreenHome />
      </Suspense>
    ),
  },
  {
    path: "/recruitment",
    main: () => (
      <Suspense key={index} fallback={<Fallback />}>
        <Recruitment />
      </Suspense>
    ),
  },
  {
    path: "/register",
    main: () => (
      <Suspense key={index} fallback={<Fallback />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "/login",
    main: () => (
      <Suspense key={index} fallback={<Fallback />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/About",
    exact: true,
    main: () => (
      <Suspense key={index} fallback={<Fallback />}>
        <ScreenAbout />
      </Suspense>
    ),
  },
  {
    path: "/Contact",
    exact: true,
    main: () => (
      <Suspense key={index} fallback={<Fallback />}>
        <ScreenContact />
      </Suspense>
    ),
  },
  {
    path: "/Service",
    exact: true,
    main: () => <ScreenService />,
  },
  {
    path: "/Dashboard",
    exact: true,
    main: () => (
      <Suspense key={index} fallback={<Fallback />}>
        <LoginDashboardScreen />
      </Suspense>
    ),
  },
  {
    path: "/Admin/Dashboard",
    exact: true,
    main: () => (
      <Suspense key={index} fallback={<Fallback />}>
        <Dashboard />
      </Suspense>
    ),
  },
  {
    path: "",
    exact: true,
    main: () => (
      <Suspense key={index} fallback={<Fallback />}>
        <PageNotFound />
      </Suspense>
    ),
  },
];
export default index;

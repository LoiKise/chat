import React, { lazy, Suspense } from "react";
import Fallback from "../components/Fallback";
const PageNotFound = lazy(() =>
  import("../components/PageNotFound/PageNotFound")
);
const ScreenHome = lazy(() => import("../components/Home"));
const ScreenAbout = lazy(() => import("../components/About"));
const ScreenContact = lazy(() => import("../components/Contact/Index"));
const ScreenService = lazy(() => import("../components/Service"));
const ScreenLoginDashboard = lazy(() =>
  import("../components/Admin/Login/Login")
);
const ScreenSearch = lazy(() => import("../components/Search/Search.js"));
const Dashboard = lazy(() => import("../components/Admin/Dashboard/Dashboard"));
const Recruitment = lazy(() => import("../components/Recruitment/Index"));
const Login = lazy(() => import("../components/Login"));
const Register = lazy(() => import("../components/Register"));
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
    path: "/Recruitment",
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
    main: () => (
      <Suspense key={index} fallback={<Fallback />}>
        <ScreenSearch />
      </Suspense>
    ),
  },
  {
    path: "/Dashboard",
    exact: true,
    main: () => (
      <Suspense key={index} fallback={<Fallback />}>
        <ScreenLoginDashboard />
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

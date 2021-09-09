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
  {
    path: "/Service",
    exact: true,
    main: () => <ScreenService />,
  }
];
export default index;

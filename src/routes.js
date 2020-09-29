import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./Pages/HomePage/HomePage")),
    private: false,
    restricted: false,
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("./Pages/RegisterPage/RegisterPage")),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./Pages/LoginPage/LoginPage")),
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    label: "TContacts",
    exact: true,
    component: lazy(() => import("./Pages/ContactPage/ContactPage.jsx")),
    private: true,
    restricted: false,
  },
];

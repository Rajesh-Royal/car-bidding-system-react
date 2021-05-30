import { lazy } from "react";

const Home = lazy(() => import("../Pages/Home"));
const BidderProfile = lazy(() => import("../Pages/BidderProfile"));
const Page404 = lazy(() => import("../Pages/404"));

const routes = [
  {
    path: "/dashboard",
    component: Home,
  },
  {
    path: "/dashboard/:username/:userId",
    component: BidderProfile,
  },
  {
    path: "/404",
    component: Page404,
  },
];

export default routes;

import { routesConfig, adminRoutes } from "../config/routes";

import HomePage from "../pages/HomePage";
import ProductCart from "../pages/ProductCart";
import Login from "../components/layouts/components/Login";
import BookDetail from "../pages/BookDetail";
import Profile from "../pages/Profile";
import Payment from "../pages/Payment";
import PageNotFound from "../pages/PageNotFound";
import LayoutPayment from "../components/layouts/LayoutPayment";
import LayoutLogin from "../components/layouts/LayoutLogin";
import LayoutRegister from "../components/layouts/LayoutRegister";
import SearchPage from "../pages/SearchPage";
import Register from "../components/layouts/components/Register";
import ForgotPassword from "../pages/ForgotPassword";
//admin
import Home from "../pagesAdmin/Home/Home";
import DefaultLayoutAdmin from "../pagesAdmin/DefaultLayoutAdmin";
import LuuY from "../pages/LuuY";
import HomePageAdmin from "../pagesAdmin";
// Public Routes
export const publicRoutes = [
  { path: routesConfig.home, component: HomePage, exact: true },
  {
    path: adminRoutes.home,
    component: HomePageAdmin,
    exact: true,
    layout: DefaultLayoutAdmin,
    isAdmin: true,
  },
  {
    path: routesConfig.register,
    component: Register,
    exact: false,
    layout: LayoutRegister,
  },
  {
    path: routesConfig.fogotpassword,
    component: ForgotPassword,
    exact: false,
    layout: LayoutRegister,
  },
  {
    path: routesConfig.login,
    component: Login,
    exact: false,
    layout: LayoutLogin,
  },
  { path: routesConfig.cart, component: ProductCart, exact: false },
  { path: routesConfig.bookdetails, component: BookDetail, exact: false },
  { path: routesConfig.profile, component: Profile, exact: false },
  {
    path: routesConfig.payment,
    component: Payment,
    exact: false,
    layout: LayoutPayment,
  },
  { path: routesConfig.searchResult, component: SearchPage, exact: false },
  { path: routesConfig.luuy, component: LuuY, exact: false },
  { path: routesConfig.pageNotFound, component: PageNotFound, exact: false },
];

export const privateRoutes = [];

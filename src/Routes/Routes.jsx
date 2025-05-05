import {
    createBrowserRouter
  } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import SubscriptionServiceDetails from "../pages/SubscriptionServiceDetails/SubscriptionServiceDetails";
import Loading from "../components/Loading/Loading";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ContactUs from "../pages/Contact Us/ContactUs";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children: [
        {
          index:true,
          loader: ()=>fetch('../subscription.json'),
          hydrateFallbackElement: <Loading/>, 
          Component: Home
        },
        {
          path: 'profile',
          Component: ProfilePage
        },
        {
          path: '/subscriptionService/:id',
          loader: ()=>fetch('../subscription.json'),
          hydrateFallbackElement: <Loading/>,
          Component: SubscriptionServiceDetails
        },
        {
          path: 'contactUs',
          Component: ContactUs
        }
      ]
    },
    {
      path:'/auth',
      Component: AuthLayout,
      children: [
        {
          path:'/auth/login',
          Component: Login
        },
        {
          path:'/auth/register',
          Component: Register
        }
      ]
    },
    {
        path: '/*',
        Component: ErrorPage
    }
]);
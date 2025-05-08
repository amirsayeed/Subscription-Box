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
import PrivateRoute from "../provider/PrivateRoute";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index:true,
          loader: ()=>fetch('../subscription.json'),
          hydrateFallbackElement: <Loading/>, 
          element: <Home/>
        },
        {
          path: 'profile',
          element: <PrivateRoute><ProfilePage/></PrivateRoute>
        },
        {
          path: '/subscriptionService/:id',
          loader: ()=>fetch('../subscription.json'),
          hydrateFallbackElement: <Loading/>,
          element: <PrivateRoute><SubscriptionServiceDetails/></PrivateRoute>
        },
        {
          path: 'contactUs',
          element: <PrivateRoute><ContactUs/></PrivateRoute>
        }
      ]
    },
    {
      path:'/auth',
      element: <AuthLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path:'/auth/login',
          element: <Login/>
        },
        {
          path:'/auth/forgetPassword/:email',
          element: <ForgetPassword/>
        },
        {
          path:'/auth/register',
          element: <Register/>
        }
      ]
    }
]);
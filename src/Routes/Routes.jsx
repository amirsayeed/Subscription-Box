import {
    createBrowserRouter
  } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children: [
        {
          index:true,
          loader: ()=>fetch('../subscription.json'),
          hydrateFallbackElement: <div>Loading....</div>, 
          Component: Home
        },
        {path: 'profile',Component: ProfilePage}
      ]
    },
    {
        path: '/*',
        Component: ErrorPage
    }
]);
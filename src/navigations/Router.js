import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GUESTPATHS } from "./paths";
import Auth from "../pages/Auth";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/home";




const router = createBrowserRouter([
  {
    path: GUESTPATHS.prefix,
    element: <Auth/>,
    children: [
      {
        path: GUESTPATHS.login,
        element: <Login/>,
      },
      {
        path: GUESTPATHS.register,
        element: <Register/>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>route not found §§§</h1>,
  },
  {
    path:"home",
    element:<Home/>
  }
 
]);

const Router = () => {
  return <RouterProvider router={router} />;
};
export default Router;

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/bookings/Bookings";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/checkout/:id',
        element: <PrivetRoutes><CheckOut></CheckOut></PrivetRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

      },
      {
        path: '/bookings',
        element: <PrivetRoutes>
          <Bookings></Bookings>
        </PrivetRoutes>,
      },
    ]
  },
]);


export default router;
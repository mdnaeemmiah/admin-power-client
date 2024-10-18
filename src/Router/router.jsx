import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddDoctor from "../Pages/Dashboard/AddDoctor";
import ManageDoctor from "../Pages/Dashboard/ManageDoctor";
import SingUp from "../Pages/SingUp/SingUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/sing-up',
        element: <SingUp></SingUp>
      },
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'all-users',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'add-doctor',
        element: <AddDoctor></AddDoctor>
      },
      {
        path: 'manage',
        element: <ManageDoctor></ManageDoctor>,
      },
    ]
  }
]);

export default router;
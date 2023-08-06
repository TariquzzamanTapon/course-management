import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Home/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MySelectClass from "../Pages/Dashboard/MySelectClass/MySelectClass";
import MangeUsers from "../Pages/Dashboard/MangeUsers/MangeUsers";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/instructor',
        element: <Instructor></Instructor>
      },
      {
        path: "class",
        element: <Classes></Classes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }

    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/myclass",
        element: <MySelectClass></MySelectClass>
      },
      {
        path: '/dashboard/manage-users',
        element: <MangeUsers></MangeUsers>
      }
    ]
  }
])


export default router;
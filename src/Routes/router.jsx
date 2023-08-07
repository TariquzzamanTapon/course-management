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
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import AdminRoute from "./adminRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";


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
        element: <AdminRoute><MangeUsers></MangeUsers></AdminRoute>
      }, 

      {
        path: '/dashboard/manage-class',
        element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
      }, 

      {
        path: '/dashboard/add-class',
        element: <AddClass></AddClass>
      },
      {
        path : '/dashboard/my-class',
        element : <MyClass></MyClass>
      },
      {
        path : '/dashboard/payment/:id',
        element : <Payment></Payment>,
        loader : ({params})=> fetch(`https://toys-hunter.vercel.app/toys/${params.id}`)
      }
    ]
  }
])


export default router;
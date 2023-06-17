import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Instructor from "../Pages/Instructor/Instructor";


const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>,
    errorElement : <Error></Error>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/instructor',
        element : <Instructor></Instructor>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : "/register",
        element : <Register></Register>
      }

    ]
  }
])


export default router;
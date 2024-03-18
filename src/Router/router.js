import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Appointment from "../Pages/Appointment/Appointment";
import Signup from "../Pages/Signup/Signup";
import Secondary from "../Layout/Secondary";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/appointment", element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: "/doctorsportal", element: <Secondary></Secondary>, children: [
            {
                path: "/doctorsportal/login", element: <Login></Login>
            },
            {
                path: "/doctorsportal/signup", element: <Signup></Signup>
            },
        ]
    }
])


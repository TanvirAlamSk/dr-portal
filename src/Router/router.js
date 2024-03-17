import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Appointment from "../Pages/Appointment/Appointment";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/appointment", element: <Appointment></Appointment>
            },
            {
                path: "/login", element: <Login></Login>
            }
        ]
    },
    {
        path: "/login", element: <Login></Login>
    }
])


import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Appointment from "../Pages/Appointment/Appointment";
import Signup from "../Pages/Signup/Signup";
import Secondary from "../Layout/Secondary";
import About from "../Pages/About/About";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import Users from "../Pages/Users/Users";
import AdminRouter from "./AdminRouter";
import AddDoctor from "../Pages/AddDoctor/AddDoctor";

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
                path: "/about", element: <PrivateRouter><About></About></PrivateRouter>
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
    },
    {
        path: "/dashboard", element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard", element: <Dashboard></Dashboard>
            },
            {
                path: "/dashboard/users", element: <AdminRouter><Users></Users></AdminRouter>
            },
            {
                path: "/dashboard/add-doctor", element: <AddDoctor></AddDoctor>
            },
        ]
    }
])


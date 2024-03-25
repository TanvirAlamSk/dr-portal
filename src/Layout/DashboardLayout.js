import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
    const [drawerdirection, setDrawerdirection] = useState(true)
    const { loginUser } = useContext(AuthContext);
    const [isAdmin] = useAdmin(loginUser?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-slate-100">

                    <label onClick={() => setDrawerdirection(!drawerdirection)} htmlFor="my-drawer-2" className="btn btn-primary btn-outline font-extrabold text-xl drawer-button lg:hidden rounded-full px-2 float-end">{`${drawerdirection ? ">>" : "<<"}`}</label>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side mt-[72px] md:mt-0 w-4/5">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar bg-slate-400" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 text-white md:text-base-content  mt-10 md:mt-0">
                        <li><Link to="/dashboard">My Appointment</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to="/dashboard/users">All User</Link></li>
                                <li><Link to="/dashboard/add-doctor">Add A Doctor</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
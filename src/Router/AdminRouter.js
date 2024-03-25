import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../Context/AuthProvider';

const AdminRouter = ({ children }) => {
    const { loader, loginUser } = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, adminLoader] = useAdmin(loginUser?.email);
    if (loader || adminLoader) {
        return <span className="loading loading-dots loading-md text-center d-block"></span>
    }

    if (loginUser && isAdmin) {
        return (
            <div>
                {children}
            </div>
        );
    } else {
        return <Navigate to="/doctorsportal/login" state={{ form: location }} replace></Navigate>
    }


};

export default AdminRouter;
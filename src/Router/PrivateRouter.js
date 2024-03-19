import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { loginUser, loader } = useContext(AuthContext)
    const location = useLocation()
    if (loader) {
        return <span className="loading loading-dots loading-md"></span>
    }
    if (loginUser) {
        return (
            <div>
                {children}
            </div>
        );
    }
    return <Navigate to="/doctorsportal/login" state={{ from: location }} replace></Navigate>

};

export default PrivateRouter;
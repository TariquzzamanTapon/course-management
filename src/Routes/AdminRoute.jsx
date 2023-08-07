import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../componets/Firebase/Hooks/useAdmin/useAdmin';
import { ScaleLoader } from 'react-spinners';
import { AuthContext } from '../AuthProvider/AuthProver';

const AdminRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    const [isAdmin] = useAdmin();

    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;
import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <Loading/>
    }
    return (
        <div>
            {user ? children : <Navigate state={location.pathname} to='/auth/login'/>}
        </div>
    );
};

export default PrivateRoute;
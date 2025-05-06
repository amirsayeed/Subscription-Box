import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            {user ? children : <Navigate to='/auth/login'/>}
        </div>
    );
};

export default PrivateRoute;
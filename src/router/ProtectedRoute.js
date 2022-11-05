import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/contexts/AuthProvider';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        console.log('loading found');
        return <div>Loading ...</div>
    }
    if(user && user.uid){
        return children;
    }
    
    return <Navigate to='/login' state={{from: location}} replace/>;
};

export default ProtectedRoute;
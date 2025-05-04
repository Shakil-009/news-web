import React from 'react';
import { Navigate } from 'react-router';

const home = () => {
    return <Navigate to="/category/0"></Navigate>;
};

export default home;
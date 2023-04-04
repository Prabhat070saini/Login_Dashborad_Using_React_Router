import React from 'react'
import { Navigate } from "react-router-dom"

const PrivaeRoute = ({ children, Islogin }) => {
    if (Islogin) {
        // console.log(children);
        return children;
    }
    else {
        return <Navigate to="/login" />
    }
}

export default PrivaeRoute;

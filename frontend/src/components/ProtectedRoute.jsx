import React from "react";
import { Navigate} from "react-router-dom";
import { isLoggedIn } from "../utils/authUtils.js";

const ProtectedRoute = ({ children }) => {
    if ( !isLoggedIn() ) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default ProtectedRoute;
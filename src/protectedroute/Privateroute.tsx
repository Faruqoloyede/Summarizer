import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { JSX } from "react";

const Privateroute = ({children}: {children: JSX.Element}) => {
    const {user} = useAuth();

  return user ? children : <Navigate to='/login' />
}

export default Privateroute
import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../contexts/useAuth.ts";


export default function PrivateRoute() {
    const {isAuthenticated} = useAuth();
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;

}
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import PrivateRoute from "./PrivateRoute.tsx";
import Login from "../pages/Login.tsx";
import Dashboard from "../pages/Dashboard.tsx";

export default function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route index element={<Navigate to={"login"}/>}/>
                <Route path={"login"} element={<Login/>}/>
                <Route path={"/dashboard"} element={<PrivateRoute/>}>
                    <Route index element={<Dashboard/>}/>
                </Route>

            </Routes>
        </HashRouter>
    )
}
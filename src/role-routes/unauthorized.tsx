import {IRoute} from "./utility/iroute";
import RouteConverter from "./utility/route-converter";
import {ISidebarItem} from "./utility/isidebar-item";
import {BsColumnsGap, BsXDiamondFill} from "react-icons/bs";
import React from "react";
import LoginPage from "../pages/login";
import RegistrationPage from "../pages/registration";
import {AuthProvider} from "../context/auth";

const unauthorizedRoutes: IRoute[] = [
    {
        path: "/",
        element: <LoginPage />,
        sidebar: true
    },
    {
        path: "/registration",
        element: <RegistrationPage />,
        sidebar: true
    }
];


function UnauthorizedRoutes() {
    return (
        <AuthProvider>
            <RouteConverter routes={unauthorizedRoutes} />
        </AuthProvider>
    )
}


export default UnauthorizedRoutes;
import {IRoute} from "./utility/iroute";
import RouteConverter from "./utility/route-converter";
import {ISidebarItem} from "./utility/isidebar-item";
import {BsColumnsGap, BsXDiamondFill} from "react-icons/bs";
import React from "react";

const adminRoutes: IRoute[] = [
    {
        path: "/",
        element: <div>Lol</div>,
        sidebar: true
    },
    {
        path: "/adm",
        element: <div>kek</div>,
        sidebar: true
    }
];

const adminSidebar: ISidebarItem[] = [
    {
        name: "Главная",
        icon: <BsXDiamondFill />,
        navigate: "/"
    },
    {
        name: "Пользователи",
        icon: <BsColumnsGap />,
        navigate: "/users"
    },
    {
        name: "???",
        icon: <BsColumnsGap />,
        navigate: "/404"
    },
    {
        name: "$##$#@",
        icon: <BsColumnsGap />,
        navigate: "/404"
    }
]

function AdminRoutes() {
    return (
        <>
            <RouteConverter routes={adminRoutes} sidebarItems={adminSidebar} />
        </>
    )
}


export default AdminRoutes;
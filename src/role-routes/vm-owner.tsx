import Main from "../pages/vm-owner/main";
import VendingMachinesPage from "../pages/vm-owner/vending-machines";
import DevelopPage from "../pages/develop";
import {IRoute} from "./utility/iroute";
import RouteConverter from "./utility/route-converter";
import {ISidebarItem} from "./utility/isidebar-item";
import {BsColumnsGap, BsXDiamondFill} from "react-icons/bs";
import React from "react";

const vmRoutes: IRoute[] = [
    {
        path: "/",
        element: <Main/>,
        sidebar: true
    },
    {
        path: "/vm",
        element: <VendingMachinesPage/>,
        sidebar: true
    },
    {
        path: "/develop",
        element: <DevelopPage/>
    }
];

const vmSidebar: ISidebarItem[] = [
    {
        name: "Главная",
        icon: <BsXDiamondFill/>,
        navigate: "/"
    },
    {
        name: "Мои ВА",
        icon: <BsColumnsGap/>,
        navigate: "/vm"
    },
    {
        name: "Вторая ссылка 123",
        icon: <BsColumnsGap/>,
        navigate: "/404"
    },
    {
        name: "Ллоалывоаылваоылвоаылвоаылва",
        icon: <BsColumnsGap/>,
        navigate: "/404"
    }
]

function VmOwnerRoutes() {
    return (
        <>
            <RouteConverter routes={vmRoutes} sidebarItems={vmSidebar}/>
        </>
    )
}


export default VmOwnerRoutes;
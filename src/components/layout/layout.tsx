import React from "react";
import Dashboard, {DashboardPropsItem} from "../dashboard";
import {BsColumnsGap, BsXDiamondFill} from "react-icons/bs";

const dashboardItems: DashboardPropsItem[] = [
    {
        name: "Главная",
        icon: <BsXDiamondFill />,
        navigate: "/"
    },
    {
        name: "Мои ВА",
        icon: <BsColumnsGap />,
        navigate: "/vm"
    },
    {
        name: "Вторая ссылка 123",
        icon: <BsColumnsGap />,
        navigate: "/404"
    },
    {
        name: "Ллоалывоаылваоылвоаылвоаылва",
        icon: <BsColumnsGap />,
        navigate: "/404"
    }
]

function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-row w-screen h-screen text-gray-900 dark:text-gray-400">
            <div className="overflow-auto p-2 m-2 w-56 bg-gray-50 rounded dark:bg-gray-800">
                <Dashboard header="СДВТ" items={dashboardItems} />
            </div>
            <div className="flex flex-1 m-2 ml-3 min-h-0 sh">
                <div className="overflow-auto flex-1">
                    {children}
                </div>
            </div>
        </div>
    );
}


export default Layout;
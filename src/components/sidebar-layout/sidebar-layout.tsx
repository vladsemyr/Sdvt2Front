import React from "react";
import Dashboard from "../dashboard";
import {ISidebarItem} from "../../role-routes/utility/isidebar-item";

function SidebarLayout({items, children}: {items: ISidebarItem[],children: React.ReactNode}) {
    return (
        <div className="flex flex-row w-screen h-screen text-gray-900 dark:text-gray-400">
            <div className="overflow-auto p-2 m-2 w-56 bg-gray-50 rounded dark:bg-gray-800">
                <Dashboard header="СДВТ" items={items} />
            </div>
            <div className="flex flex-1 m-2 ml-3 min-h-0 sh">
                <div className="overflow-auto flex-1">
                    {children}
                </div>
            </div>
        </div>
    );
}


export default SidebarLayout;
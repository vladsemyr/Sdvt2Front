import {IRoute} from "./iroute";
import SidebarLayout from "../../components/sidebar-layout";
import {Route, Routes} from "react-router-dom";
import React from "react";
import Page404 from "../../pages/page404";
import {ISidebarItem} from "./isidebar-item";

function RouteConverter({routes, sidebarItems}: { routes: IRoute[], sidebarItems?: ISidebarItem[] }) {
    return (
        <>
            <Routes>
                {
                    routes.map((route, key) => (
                        <Route
                            path={route.path}
                            key={key}
                            element={
                                (route.sidebar && sidebarItems)
                                    ? <SidebarLayout items={sidebarItems}>{route.element}</SidebarLayout>
                                    : route.element
                            }
                        />
                    ))
                }
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </>);
}

export default RouteConverter;
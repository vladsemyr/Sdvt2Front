import {BrowserRouter} from 'react-router-dom';
import LoginPage from './pages/login';
import React, {Suspense} from "react";
import UnauthorizedRoutes from "./role-routes/unauthorized";

const isAuthorized = false;

const VmOwnerRoutes = React.lazy(() => import('./role-routes/vm-owner'));
const AdminRoutes = React.lazy(() => import('./role-routes/admin'));

function App() {
    if (!isAuthorized) {
        return (
            <div className="w-screen h-screen text-gray-900 dark:text-gray-400">
                <BrowserRouter basename='/management'>
                    <UnauthorizedRoutes />
                </BrowserRouter>
            </div>
        );
    }
    const ttt = 0;

    return (
        <div className="w-screen h-screen">
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter basename='/management'>
                    {
                        ttt
                            ? <AdminRoutes/>
                            : <VmOwnerRoutes/>
                    }
                </BrowserRouter>
            </Suspense>
        </div>
    )
}


export default App;

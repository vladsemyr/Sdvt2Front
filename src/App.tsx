import {BrowserRouter} from 'react-router-dom';
import LoginPage from './pages/login';
import React, {Suspense} from "react";
import UnauthorizedRoutes from "./role-routes/unauthorized";
import services from "./services/services";
import {AuthProvider} from "./context/auth";


const VmOwnerRoutes = React.lazy(() => import('./role-routes/vm-owner'));
const AdminRoutes = React.lazy(() => import('./role-routes/admin'));

function App() {
    const isAuthorized = services.sessionService.isAuthorized();

    if (!isAuthorized) {
        return (
            <div className="w-screen h-screen text-gray-900 dark:text-gray-400">
                <BrowserRouter basename='/management'>
                    <AuthProvider>
                        <UnauthorizedRoutes />
                    </AuthProvider>
                </BrowserRouter>
            </div>
        );
    }
    const ttt = 0;

    return (
        <div className="w-screen h-screen">
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter basename='/management'>
                    <AuthProvider>
                    {
                        ttt
                            ? <AdminRoutes/>
                            : <VmOwnerRoutes/>
                    }
                    </AuthProvider>
                </BrowserRouter>
            </Suspense>
        </div>
    )
}


export default App;

import {BrowserRouter} from 'react-router-dom';
import LoginPage from './pages/login';
import React, {Suspense} from "react";

const isAuthorized = true;

const VmOwnerRoutes = React.lazy(() => import('./role-routes/vm-owner'));
const AdminRoutes = React.lazy(() => import('./role-routes/admin'));

function App() {
    if (!isAuthorized) {
        return (
            <LoginPage/>
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

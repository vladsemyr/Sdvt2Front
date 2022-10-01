import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DevelopPage from './pages/develop';
import LoginPage from './pages/login';
import Page404 from './pages/page404';
import Layout from "./components/layout";
import Main from "./pages/vm-owner/main";
import VendingMachinesPage from "./pages/vm-owner/vending-machines";

const isAuthorized = true;

const routes: ({ layout?: boolean; path: string; element: () => JSX.Element })[] = [
    {
        path: "/",
        element: Main,
        layout: true
    },
    {
        path: "/vm",
        element: VendingMachinesPage,
        layout: true
    },
    {
        path: "/develop",
        element: DevelopPage
    }
];

function App() {
    if (!isAuthorized) {
        return (
            <LoginPage/>
        );
    }

    const routeComponents = routes.map((route, key) => (
        <Route
            path={route.path}
            key={key}
            element={
                route.layout
                ? <Layout>{route.element()}</Layout>
                : route.element()
            }
        />
    ));

    return (
        <div className="w-screen h-screen">
            <BrowserRouter basename='/managment'>
                <Routes>
                    { routeComponents }
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default App;

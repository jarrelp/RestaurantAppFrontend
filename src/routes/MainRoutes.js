import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// result routing
const ResultDefault = Loadable(lazy(() => import('views/result/default')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <ResultDefault />
        },
        {
            path: '/result/default',
            element: <ResultDefault />
        }
    ]
};

export default MainRoutes;

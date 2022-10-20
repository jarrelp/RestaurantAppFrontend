import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// result routing
const ResultDefault = Loadable(lazy(() => import('views/result/default')));

// application - account profile routing
const AppUserAccountProfile = Loadable(lazy(() => import('views/application/users/account-profile/Profile')));

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
        },
        {
            path: '/user/account-profile/profile',
            element: <AppUserAccountProfile />
        }
    ]
};

export default MainRoutes;

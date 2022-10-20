import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// result routing
const Result = Loadable(lazy(() => import('views/result')));

// application - account profile routing
const AppUserAccountProfile = Loadable(lazy(() => import('views/application/users/account-profile/Profile')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Result />
        },
        {
            path: '/result',
            element: <Result />
        },
        {
            path: '/user/account-profile/profile',
            element: <AppUserAccountProfile />
        }
    ]
};

export default MainRoutes;

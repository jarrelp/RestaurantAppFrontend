import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';

// login option routing
const Department = Loadable(lazy(() => import('views/admin/department')));
const Quiz = Loadable(lazy(() => import('views/admin/quiz')));

// ==============================|| ADMIN ROUTING ||============================== //

const AdminRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/admin/departments',
            element: <Department />
        },
        {
            path: '/admin/quizzes',
            element: <Quiz />
        }
    ]
};

export default AdminRoutes;

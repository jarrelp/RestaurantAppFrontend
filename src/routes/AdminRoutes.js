import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';

// login option routing
const Department = Loadable(lazy(() => import('views/admin/department')));
const Quiz = Loadable(lazy(() => import('views/admin/quiz')));
const Question = Loadable(lazy(() => import('views/admin/quiz/question')));
const Skill = Loadable(lazy(() => import('views/admin/skill')));
const User = Loadable(lazy(() => import('views/admin/user')));

const Result = Loadable(lazy(() => import('views/admin/result')));

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
        },
        {
            path: '/admin/questions/:id',
            element: <Question />
        },
        {
            path: '/admin/skills',
            element: <Skill />
        },
        {
            path: '/admin/users',
            element: <User />
        },
        {
            path: '/admin/results',
            element: <Result />
        }
    ]
};

export default AdminRoutes;

// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA AUTHENTICATION MENU ITEMS ||============================== //

const authentication = {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login',
                    title: 'Login',
                    type: 'item',
                    url: '/auth/login',
                    target: true
                },
                {
                    id: 'register',
                    title: 'Register',
                    type: 'item',
                    url: '/auth/register',
                    target: true
                }
            ]
        }
    ]
};

export default authentication;

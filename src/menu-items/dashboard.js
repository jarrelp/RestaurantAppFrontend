// assets
import { IconLayoutDashboard } from '@tabler/icons';

// ==============================|| DASHBOARD MENU ITEM ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard',
            icon: IconLayoutDashboard
        }
    ]
};

export default dashboard;

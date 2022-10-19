// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| result MENU ITEMS ||============================== //

const result = {
    id: 'result',
    title: 'Result',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Result',
            type: 'item',
            url: '/result/default',
            icon: icons.IconDashboard
        }
    ]
};

export default result;

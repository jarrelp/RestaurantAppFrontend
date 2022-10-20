// assets
import { IconUserCheck, IconBasket, IconMessages, IconLayoutKanban, IconMail, IconCalendar, IconNfc } from '@tabler/icons';

// constant
const icons = {
    IconUserCheck,
    IconBasket,
    IconMessages,
    IconLayoutKanban,
    IconMail,
    IconCalendar,
    IconNfc
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const application = {
    id: 'application',
    title: 'application',
    type: 'group',
    children: [
        {
            id: 'users',
            title: 'users',
            type: 'collapse',
            icon: icons.IconUserCheck,
            children: [
                {
                    id: 'account-profile',
                    title: 'account-profile',
                    type: 'collapse',
                    children: [
                        {
                            id: 'profile',
                            title: <>profile</>,
                            type: 'item',
                            url: '/user/account-profile/profile'
                        }
                    ]
                }
            ]
        }
    ]
};

export default application;

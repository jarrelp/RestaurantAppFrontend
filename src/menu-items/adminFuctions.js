// assets
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';

// ==============================|| EXTRA ADMIN FUNCTIONS MENU ITEMS ||============================== //

const adminFunctions = {
    id: 'adminFunctions',
    title: 'AdminFunctions',
    type: 'group',
    children: [
        {
            id: 'adminFunctions',
            title: 'AdminFunctions',
            type: 'collapse',
            icon: AdminPanelSettingsOutlinedIcon,

            children: [
                {
                    id: 'Department',
                    title: 'Department',
                    type: 'item',
                    url: '/admin/departments'
                }
            ]
        }
    ]
};

export default adminFunctions;

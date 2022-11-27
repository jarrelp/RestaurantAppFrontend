// project imports
import services from 'utils/mockAdapter';

const delay = (timeout) => new Promise((res) => setTimeout(res, timeout));

// department list
const departments = [
    {
        id: '1',
        name: 'Department 1'
    },
    {
        id: '2',
        name: 'Department 2'
    },
    {
        id: '3',
        name: 'Department 3'
    },
    {
        id: '4',
        name: 'Department 4'
    },
    {
        id: '5',
        name: 'Department 5'
    },
    {
        id: '6',
        name: 'Department 6'
    }
];

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/department/list').reply(async (request) => {
    try {
        await delay(2000);
        return [200, { departments }];
    } catch (err) {
        return [500, { message: 'Server Error' }];
    }
});

services.onPost('/api/department/add-department').reply((config) => {
    try {
        const { department, departments } = JSON.parse(config.data);
        const result = {
            departments: [...departments, department]
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/kanban/edit-department').reply((config) => {
    try {
        const { department, departments } = JSON.parse(config.data);

        departments.splice(
            departments.findIndex((c) => c.id === department.id),
            1,
            department
        );

        return [200, { departments }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/kanban/delete-department').reply((config) => {
    try {
        const { departmentId, departments } = JSON.parse(config.data);

        departments.splice(
            departments.findIndex((department) => department.id === departmentId),
            1
        );

        return [200, { departments }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

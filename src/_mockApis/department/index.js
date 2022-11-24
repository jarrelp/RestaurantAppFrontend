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

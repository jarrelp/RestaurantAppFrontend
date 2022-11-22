// project imports
import services from 'utils/mockAdapter';

// skill list
const skill = [
    {
        id: '1',
        name: 'Skill 1'
    },
    {
        id: '2',
        name: 'Skill 2'
    },
    {
        id: '3',
        name: 'Skill 3'
    },
    {
        id: '4',
        name: 'Skill 4'
    },
    {
        id: '5',
        name: 'Skill 5'
    },
    {
        id: '6',
        name: 'Skill 6'
    }
];

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/skill/list').reply(200, { skill });

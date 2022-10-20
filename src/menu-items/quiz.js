// assets
import { IconQuestionMark } from '@tabler/icons';

// ==============================|| quiz MENU ITEM ||============================== //

const quiz = {
    id: 'quiz',
    title: 'Quiz',
    type: 'group',
    children: [
        {
            id: 'quiz',
            title: 'Quiz',
            type: 'item',
            url: '/quiz',
            icon: IconQuestionMark
        }
    ]
};

export default quiz;

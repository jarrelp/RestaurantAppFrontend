// project imports
import services from 'utils/mockAdapter';
import quizData from '../../views/quiz/quiz-data';

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/chat/users').reply(200, { quizData });

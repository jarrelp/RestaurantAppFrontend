// project imports
import services from 'utils/mockAdapter';
import quizData from '../../views/quiz/quiz-data';

// ==============================|| MOCK SERVICES ||============================== //

const withDelay = (delay, response) => (config) => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(response);
        }, delay);
    });
};

services.onGet('/api/quiz').reply(withDelay(500, [200, quizData]));

// services.onGet('/api/quiz').reply(function (config) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve([200, { quizData }]);
//         }, 500);
//     });
// });

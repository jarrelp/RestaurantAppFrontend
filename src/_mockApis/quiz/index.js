// project imports
import services from 'utils/mockAdapter';

const delay = (timeout) => new Promise((res) => setTimeout(res, timeout));

// question list of active quiz
const activeQuizQuestions = [
    {
        id: 'question1',
        description: 'question1',
        options: [
            {
                id: 'question1option1',
                description: 'question1option1'
            },
            {
                id: 'question1option2',
                description: 'question1option2'
            },
            {
                id: 'question1option3',
                description: 'question1option3'
            }
        ]
    },
    {
        id: 'question2',
        description: 'question2',
        options: [
            {
                id: 'question2option1',
                description: 'question2option1'
            },
            {
                id: 'question2option2',
                description: 'question2option2'
            },
            {
                id: 'question2option3',
                description: 'question2option3'
            }
        ]
    },
    {
        id: 'question3',
        description: 'question3',
        options: [
            {
                id: 'question3option1',
                description: 'question3option1'
            },
            {
                id: 'question3option2',
                description: 'question3option2'
            },
            {
                id: 'question3option3',
                description: 'question3option3'
            }
        ]
    },
    {
        id: 'question4',
        description: 'question4',
        options: [
            {
                id: 'question4option1',
                description: 'question4option1'
            },
            {
                id: 'question4option2',
                description: 'question4option2'
            },
            {
                id: 'question4option3',
                description: 'question4option3'
            }
        ]
    },
    {
        id: 'question5',
        description: 'question5',
        options: [
            {
                id: 'question5option1',
                description: 'question5option1'
            },
            {
                id: 'question5option2',
                description: 'question5option2'
            },
            {
                id: 'question5option3',
                description: 'question5option3'
            }
        ]
    },
    {
        id: 'question6',
        description: 'question6',
        options: [
            {
                id: 'question6option1',
                description: 'question6option1'
            },
            {
                id: 'question6option2',
                description: 'question6option2'
            },
            {
                id: 'question6option3',
                description: 'question6option3'
            }
        ]
    },
    {
        id: 'question7',
        description: 'question7',
        options: [
            {
                id: 'question7option1',
                description: 'question7option1'
            },
            {
                id: 'question7option2',
                description: 'question7option2'
            },
            {
                id: 'question7option3',
                description: 'question7option3'
            }
        ]
    },
    {
        id: 'question8',
        description: 'question8',
        options: [
            {
                id: 'question8option1',
                description: 'question8option1'
            },
            {
                id: 'question8option2',
                description: 'question8option2'
            },
            {
                id: 'question8option3',
                description: 'question8option3'
            }
        ]
    },
    {
        id: 'question9',
        description: 'question9',
        options: [
            {
                id: 'question9option1',
                description: 'question9option1'
            },
            {
                id: 'question9option2',
                description: 'question9option2'
            },
            {
                id: 'question9option3',
                description: 'question9option3'
            }
        ]
    },
    {
        id: 'question10',
        description: 'question10',
        options: [
            {
                id: 'question10option1',
                description: 'question10option1'
            },
            {
                id: 'question10option2',
                description: 'question10option2'
            },
            {
                id: 'question10option3',
                description: 'question10option3'
            }
        ]
    },
    {
        id: 'question11',
        description: 'question11',
        options: [
            {
                id: 'question11option1',
                description: 'question11option1'
            },
            {
                id: 'question11option2',
                description: 'question11option2'
            },
            {
                id: 'question11option3',
                description: 'question11option3'
            }
        ]
    },
    {
        id: 'question12',
        description: 'question12',
        options: [
            {
                id: 'question12option1',
                description: 'question12option1'
            },
            {
                id: 'question12option2',
                description: 'question12option2'
            },
            {
                id: 'question12option3',
                description: 'question12option3'
            }
        ]
    }
];

// quiz list
const quizzes = [
    {
        id: '1',
        name: 'quiz1',
        active: 'true',
        questions: activeQuizQuestions
    }
];

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/quiz/list').reply(async (request) => {
    try {
        await delay(1000);
        return [200, { quizzes }];
    } catch (err) {
        return [500, { message: 'Server Error' }];
    }
});

services.onGet('/api/quiz/active').reply(async (request) => {
    try {
        await delay(1000);
        return [200, { activeQuizQuestions }];
    } catch (err) {
        return [500, { message: 'Server Error' }];
    }
});

services.onPost('/api/quiz/add-quiz').reply(async (config) => {
    try {
        await delay(200);
        const { quiz, quizzes } = JSON.parse(config.data);
        const result = {
            quizzes: [...quizzes, quiz]
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/quiz/edit-quiz').reply(async (config) => {
    try {
        await delay(200);
        const { quiz, quizzes } = JSON.parse(config.data);

        quizzes.splice(
            quizzes.findIndex((s) => s.id === quiz.id),
            1,
            quiz
        );

        const result = {
            quizzes
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/quiz/delete-quiz').reply(async (config) => {
    try {
        await delay(200);
        const { quizzes, quizId } = JSON.parse(config.data);

        quizzes.splice(
            quizzes.findIndex((quiz) => quiz.id === quizId),
            1
        );

        const result = {
            quizzes
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/quiz/delete-quizzes').reply(async (config) => {
    try {
        await delay(200);
        const { quizzes, quizIds } = JSON.parse(config.data);

        quizIds.map((id) =>
            quizzes.splice(
                quizzes.findIndex((quiz) => quiz.id === id),
                1
            )
        );

        const result = {
            quizzes
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

//question
services.onPost('/api/question/list').reply(async (config) => {
    try {
        await delay(1000);
        const { quizId } = JSON.parse(config.data);

        const quiz = quizzes.find((s) => s.id === quizId);

        return [200, quiz.questions];
    } catch (err) {
        return [500, { message: 'Server Error' }];
    }
});

services.onPost('/api/question/add-question').reply(async (config) => {
    try {
        await delay(200);
        const { quizId, question, quizzes } = JSON.parse(config.data);

        const quiz = quizzes.findIndex((s) => s.id === quizId);
        // const currentQuestions = quiz.map((q) => q.questions);
        // currentQuestions.splice(
        //     currentQuestions.findIndex((s) => s.id === question.id),
        //     1,
        //     question
        // );
        quiz.questions.push(question);

        quizzes.splice(
            quizzes.findIndex((s) => s.id === quizId),
            1,
            quiz
        );

        const result = {
            quizzes
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/question/edit-question').reply(async (config) => {
    try {
        await delay(200);
        const { quizId, question, quizzes } = JSON.parse(config.data);

        const quiz = quizzes.findIndex((s) => s.id === quizId);
        // const currentQuestions = quiz.map((q) => q.questions);
        // currentQuestions.splice(
        //     currentQuestions.findIndex((s) => s.id === question.id),
        //     1,
        //     question
        // );
        quiz.questions.splice(
            quiz.questions.findIndex((s) => s.id === question.id),
            1,
            question
        );

        quizzes.splice(
            quizzes.findIndex((s) => s.id === quizId),
            1,
            quiz
        );

        const result = {
            quizzes
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/question/delete-question').reply(async (config) => {
    try {
        await delay(200);
        const { quizId, questionId, quizzes } = JSON.parse(config.data);

        const quiz = quizzes.findIndex((s) => s.id === quizId);
        // const currentQuestions = quiz.map((q) => q.questions);
        // currentQuestions.splice(
        //     currentQuestions.findIndex((s) => s.id === question.id),
        //     1,
        //     question
        // );
        quiz.questions.splice(
            quiz.questions.findIndex((s) => s.id === questionId),
            1
        );

        quizzes.splice(
            quizzes.findIndex((s) => s.id === quizId),
            1,
            quiz
        );

        const result = {
            quizzes
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/question/delete-questions').reply(async (config) => {
    try {
        await delay(200);
        const { quizId, questionIds, quizzes } = JSON.parse(config.data);

        const quiz = quizzes.findIndex((s) => s.id === quizId);
        // const currentQuestions = quiz.map((q) => q.questions);
        // currentQuestions.splice(
        //     currentQuestions.findIndex((s) => s.id === question.id),
        //     1,
        //     question
        // );
        questionIds.map((id) =>
            quiz.questions.splice(
                quiz.questions.findIndex((s) => s.id === id),
                1
            )
        );

        quizzes.splice(
            quizzes.findIndex((s) => s.id === quizId),
            1,
            quiz
        );

        const result = {
            quizzes
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

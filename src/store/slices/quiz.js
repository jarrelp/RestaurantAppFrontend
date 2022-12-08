// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    activeQuiz: [],
    quizzes: [],
    questions: [],
    options: []
};

const slice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET QUIZZES
        getQuizListSuccess(state, action) {
            state.quizzes = action.payload;
        },

        // GET QUIZ ACTIVE
        getQuizActiveSuccess(state, action) {
            state.activeQuiz = action.payload;
        },

        // ADD QUIZ
        addQuizSuccess(state, action) {
            state.quizzes = action.payload.quizzes;
        },

        // EDIT QUIZ
        editQuizSuccess(state, action) {
            state.quizzes = action.payload.quizzes;
        },

        // DELETE QUIZ
        deleteQuizSuccess(state, action) {
            state.quizzes = action.payload.quizzes;
        },

        // DELETE QUIZZES
        deleteQuizzesSuccess(state, action) {
            state.quizzes = action.payload.quizzes;
            state.questions = action.payload.questions;
            state.options = action.payload.options;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getQuizzesList() {
    return async () => {
        try {
            const response = await axios.get('/api/quiz/list');
            dispatch(slice.actions.getQuizListSuccess(response.data.quizzes));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getQuizActive() {
    return async () => {
        try {
            const response = await axios.get('/api/quiz/active');
            dispatch(slice.actions.getQuizActiveSuccess(response.data.activeQuizQuestions));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function addQuiz(quiz, quizzes) {
    return async () => {
        try {
            const response = await axios.post('/api/quiz/add-quiz', { quiz, quizzes });
            dispatch(slice.actions.addQuizSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function editQuiz(quiz, quizzes) {
    return async () => {
        try {
            const response = await axios.post('/api/quiz/edit-quiz', { quiz, quizzes });
            dispatch(slice.actions.editQuizSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function deleteQuiz(quizId, quizzes) {
    return async () => {
        try {
            const response = await axios.post('/api/quiz/delete-quiz', { quizId, quizzes });
            dispatch(slice.actions.deleteQuizSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function deleteQuizzes(quizIds, quizzes) {
    return async () => {
        try {
            const response = await axios.post('/api/quiz/delete-quizzes', { quizzes, quizIds });
            dispatch(slice.actions.deleteQuizzesSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

//question
export function getQuestionsList(quizId) {
    return async () => {
        try {
            const response = await axios.get('/api/question/list', { quizId });
            dispatch(slice.actions.getQuizListSuccess(response.data.quizzes));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

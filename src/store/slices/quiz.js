// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    quizzes: [],
    activeQuiz: []
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
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getQuizList() {
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

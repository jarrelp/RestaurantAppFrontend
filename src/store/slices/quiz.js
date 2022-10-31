// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    chats: [],
    user: {},
    users: []
};

const slice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },
        // GET USERS
        getUsersSuccess(state, action) {
            state.users = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getUsers() {
    return async () => {
        try {
            const response = await axios.get('/api/chat/users');
            dispatch(slice.actions.getUsersSuccess(response.data.users));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

import { createSlice } from '@reduxjs/toolkit';
import { getDepartmentsList } from './departments';

// ==============================|| SLICE - LOADING ||============================== //

const slice = createSlice({
    name: 'error',
    initialState: '',
    extraReducers: {
        [getDepartmentsList.pending]: () => '',
        [getDepartmentsList.rejected]: (state, action) => {
            return action.error.message;
        }
    }
});

export const selectError = (state) => state.error;

export default slice.reducer;

// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    departments: []
};

const slice = createSlice({
    name: 'department',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET DEPARTMENTS
        getDepartmentsListSuccess(state, action) {
            state.departments = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getDepartmentsList() {
    return async () => {
        try {
            const response = await axios.get('/api/department/list');
            dispatch(slice.actions.getDepartmentsListSuccess(response.data.departments));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

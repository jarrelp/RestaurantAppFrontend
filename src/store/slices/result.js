// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    results: [],
    chartData: []
};

const slice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET RESULTS
        getResultsListSuccess(state, action) {
            state.results = action.payload;
        },

        // GET RESULTCHARTDATA
        getResultChartSuccess(state, action) {
            state.chartData = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getResultsList() {
    return async () => {
        try {
            const response = await axios.get('/api/result/list');
            dispatch(slice.actions.getResultsListSuccess(response.data.results));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getResultChart() {
    return async () => {
        try {
            const response = await axios.get('/api/result/list');
            dispatch(slice.actions.getResultChartSuccess(response.data.chartData));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

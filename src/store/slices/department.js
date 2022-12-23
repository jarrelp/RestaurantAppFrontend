// third-party
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// project imports
import axios from 'apis/backendApi';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const slowCode = async () => {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 3000);
    });
};

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
        },

        // ADD DEPARTMENT
        addDepartmentSuccess(state, action) {
            state.departments = action.payload.departments;
        },

        // EDIT DEPARTMENT
        editDepartmentSuccess(state, action) {
            state.departments = action.payload.departments;
        },

        // DELETE DEPARTMENT
        deleteDepartmentSuccess(state, action) {
            state.departments = action.payload.departments;
        },

        // DELETE DEPARTMENTS
        deleteDepartmentsSuccess(state, action) {
            state.departments = action.payload.departments;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export const getDepartmentsList = createAsyncThunk('/api/departments/get', async () => {
    try {
        await slowCode();
        const response = await axios.get('/api/departments');
        dispatch(slice.actions.getDepartmentsListSuccess(response.data));
    } catch (error) {
        dispatch(slice.actions.hasError(error));
    }
});

export const addDepartment = createAsyncThunk('/api/departments/add', async (department, departments) => {
    try {
        await slowCode();
        const response = await axios.post('/api/departments', department);
        let result = {
            departments: [...departments, response.data]
        };
        dispatch(slice.actions.addDepartmentSuccess(result));
    } catch (error) {
        dispatch(slice.actions.hasError(error));
    }
});

// export const addDepartment = createAsyncThunk('/api/departments', async (department, departments) => {
//     try {
//         await slowCode();
//         await axios.post('/api/departments', { department });
//         const result = {
//             departments: [...departments, department]
//         };
//         dispatch(slice.actions.addDepartmentSuccess(result));
//     } catch (error) {
//         dispatch(slice.actions.hasError(error));
//     }
// });

export const editDepartment = createAsyncThunk('/api/departments', async (department, departments) => {
    try {
        await slowCode();
        const response = await axios.post('/api/departments', { department, departments });
        dispatch(slice.actions.editDepartmentSuccess(response.data));
    } catch (error) {
        dispatch(slice.actions.hasError(error));
    }
});

// export function addDepartment(department, departments) {
//     return async () => {
//         try {
//             const response = await axios.post('/api/department/add-department', { department, departments });
//             dispatch(slice.actions.addDepartmentSuccess(response.data));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// export function editDepartment(department, departments) {
//     return async () => {
//         try {
//             const response = await axios.post('/api/department/edit-department', { department, departments });
//             dispatch(slice.actions.editDepartmentSuccess(response.data));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

export function deleteDepartment(departmentId, departments) {
    return async () => {
        try {
            const response = await axios.post('/api/department/delete-department', { departments, departmentId });
            dispatch(slice.actions.deleteDepartmentSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function deleteDepartments(departmentIds, departments) {
    return async () => {
        try {
            const response = await axios.post('/api/department/delete-departments', { departments, departmentIds });
            dispatch(slice.actions.deleteDepartmentsSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

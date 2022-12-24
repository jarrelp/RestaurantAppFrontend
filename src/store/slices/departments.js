// third-party
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// project imports
import axios from 'apis/backendApi';

// ----------------------------------------------------------------------

// const slowCode = async () => {
//     return new Promise(function (resolve, reject) {
//         setTimeout(resolve, 3000);
//     });
// };

export const getDepartmentsList = createAsyncThunk('/api/departments/get', async () => {
    try {
        // await slowCode();
        const response = await axios.get('/api/departments');
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const addDepartment = createAsyncThunk('/api/departments/post', async (department) => {
    try {
        // await slowCode();
        const response = await axios.post('/api/departments', department);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const deleteDepartment = createAsyncThunk('/api/departments/delete', async (departmentId) => {
    try {
        // await slowCode();
        const response = await axios.delete(`/api/departments/${departmentId}`);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

// export const deleteDepartments = createAsyncThunk('/api/departments/deletemultiple', async (departmentIds) => {
//     try {
//         // {
//         //     "ids": [
//         //       1, 2
//         //     ]
//         //   }
//         // await slowCode();

//         // var ids = [];
//         // departmentIds.map((id) => ids.push(id));
//         // var iets = { ids };
//         const response = await axios.delete('/api/departments/multiple', departmentIds);
//         return response.data;
//     } catch (error) {
//         throw Error(error.message);
//     }
// });

export const updateDepartment = createAsyncThunk('/api/departments/put', async (department) => {
    try {
        // await slowCode();
        const response = await axios.put(`/api/departments/${department.id}`, department);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

const slice = createSlice({
    name: 'departments',
    initialState: [],
    // reducers: {
    //     // GET DEPARTMENTS
    //     getDepartmentsListSuccess: (state, action) => action.payload,

    //     // ADD DEPARTMENT
    //     addDepartmentSuccess: {
    //         reducer: (state, action) => {
    //             state.unshift(action.payload);
    //         },
    //         prepare: (department) => ({ payload: { id: 1, title: department } })
    //     },

    //     // EDIT DEPARTMENT
    //     editDepartmentSuccess(state, action) {
    //         state.departments = action.payload.departments;
    //     },

    //     // DELETE DEPARTMENT
    //     deleteDepartmentSuccess: (state, action) => {
    //         let departmentIdx = state.findIndex((department) => department.id === parseInt(action.payload));
    //         state.splice(departmentIdx, 1);
    //     },

    //     // DELETE DEPARTMENTS
    //     deleteDepartmentsSuccess(state, action) {
    //         state.departments = action.payload.departments;
    //     }
    // },
    extraReducers: {
        [getDepartmentsList.fulfilled]: (state, { payload }) => payload,
        [addDepartment.fulfilled]: (state, { payload }) => {
            state.push(payload);
        },
        [deleteDepartment.fulfilled]: (state, { payload }) => {
            let departmentIdx = state.findIndex((department) => department.id === parseInt(payload));
            state.splice(departmentIdx, 1);
        },
        // [deleteDepartments.fulfilled]: (state, { payload }) => {
        //     payload.map((id) =>
        //         state.splice(
        //             state.findIndex((department) => department.id === parseInt(id)),
        //             1
        //         )
        //     );
        // },
        [updateDepartment.fulfilled]: (state, { payload }) => {
            let departmentIdx = state.findIndex((department) => department.id === parseInt(payload.id));
            state.splice(departmentIdx, 1, payload);
        }
    }
});

// Reducer

// ----------------------------------------------------------------------

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

// export const editDepartment = createAsyncThunk('/api/departments/update', async (department, departments) => {
//     try {
//         await slowCode();
//         const response = await axios.put('/api/departments', { department, departments });
//         dispatch(slice.actions.editDepartmentSuccess(response.data));
//     } catch (error) {
//         dispatch(slice.actions.hasError(error));
//     }
// });

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

// export function deleteDepartment(departmentId, departments) {
//     return async () => {
//         try {
//             const response = await axios.post('/api/department/delete-department', { departments, departmentId });
//             dispatch(slice.actions.deleteDepartmentSuccess(response.data));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// export function deleteDepartments(departmentIds, departments) {
//     return async () => {
//         try {
//             const response = await axios.post('/api/department/delete-departments', { departments, departmentIds });
//             dispatch(slice.actions.deleteDepartmentsSuccess(response.data));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

export const selectDepartments = (state) => state.department;

export default slice.reducer;

// // third-party
// import { createSlice } from '@reduxjs/toolkit';

// // project imports
// import axios from 'utils/axios';
// import { dispatch } from '../index';

// // ----------------------------------------------------------------------

// const initialState = {
//     error: null,
//     skills: []
// };

// const slice = createSlice({
//     name: 'skill',
//     initialState,
//     reducers: {
//         // HAS ERROR
//         hasError(state, action) {
//             state.error = action.payload;
//         },

//         // GET DEPARTMENTS
//         getSkillsListSuccess(state, action) {
//             state.skills = action.payload;
//         },

//         // ADD DEPARTMENT
//         addSkillSuccess(state, action) {
//             state.skills = action.payload.skills;
//         },

//         // EDIT DEPARTMENT
//         editSkillSuccess(state, action) {
//             state.skills = action.payload.skills;
//         },

//         // DELETE DEPARTMENT
//         deleteSkillSuccess(state, action) {
//             state.skills = action.payload.skills;
//         },

//         // DELETE DEPARTMENTS
//         deleteSkillsSuccess(state, action) {
//             state.skills = action.payload.skills;
//         }
//     }
// });

// // Reducer
// export default slice.reducer;

// // ----------------------------------------------------------------------

// export function getSkillsList() {
//     return async () => {
//         try {
//             const response = await axios.get('/api/skill/list');
//             dispatch(slice.actions.getSkillsListSuccess(response.data.skills));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// export function addSkill(skill, skills) {
//     return async () => {
//         try {
//             const response = await axios.post('/api/skill/add-skill', { skill, skills });
//             dispatch(slice.actions.addSkillSuccess(response.data));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// export function editSkill(skill, skills) {
//     return async () => {
//         try {
//             const response = await axios.post('/api/skill/edit-skill', { skill, skills });
//             dispatch(slice.actions.editSkillSuccess(response.data));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// export function deleteSkill(skillId, skills) {
//     return async () => {
//         try {
//             const response = await axios.post('/api/skill/delete-skill', { skills, skillId });
//             dispatch(slice.actions.deleteSkillSuccess(response.data));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// export function deleteSkills(skillIds, skills) {
//     return async () => {
//         try {
//             const response = await axios.post('/api/skill/delete-skills', { skills, skillIds });
//             dispatch(slice.actions.deleteSkillsSuccess(response.data));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// third-party
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// project imports
import axios from 'apis/backendApi';

// ----------------------------------------------------------------------

export const getSkillsList = createAsyncThunk('/api/skills/get', async () => {
    try {
        const response = await axios.get('/api/skills');
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const addSkill = createAsyncThunk('/api/skills/post', async (skill) => {
    try {
        const response = await axios.post('/api/skills', skill);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const deleteSkill = createAsyncThunk('/api/skills/delete', async (skillId) => {
    try {
        const response = await axios.delete(`/api/skills/${skillId}`);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const updateSkill = createAsyncThunk('/api/skills/put', async (skill) => {
    try {
        const response = await axios.put(`/api/skills/${skill.id}`, skill);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

const slice = createSlice({
    name: 'skills',
    initialState: [],
    extraReducers: {
        [getSkillsList.fulfilled]: (state, { payload }) => payload,
        [addSkill.fulfilled]: (state, { payload }) => {
            state.push(payload);
        },
        [deleteSkill.fulfilled]: (state, { payload }) => {
            let skillIdx = state.findIndex((skill) => skill.id === parseInt(payload));
            state.splice(skillIdx, 1);
        },
        [updateSkill.fulfilled]: (state, { payload }) => {
            let skillIdx = state.findIndex((skill) => skill.id === parseInt(payload.id));
            state.splice(skillIdx, 1, payload);
        }
    }
});

export const selectSkills = (state) => state.skill;

export default slice.reducer;

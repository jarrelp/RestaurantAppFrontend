// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    skills: []
};

const slice = createSlice({
    name: 'skill',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET DEPARTMENTS
        getSkillsListSuccess(state, action) {
            state.skills = action.payload;
        },

        // ADD DEPARTMENT
        addSkillSuccess(state, action) {
            state.skills = action.payload.skills;
        },

        // EDIT DEPARTMENT
        editSkillSuccess(state, action) {
            state.skills = action.payload.skills;
        },

        // DELETE DEPARTMENT
        deleteSkillSuccess(state, action) {
            state.skills = action.payload.skills;
        },

        // DELETE DEPARTMENTS
        deleteSkillsSuccess(state, action) {
            state.skills = action.payload.skills;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getSkillsList() {
    return async () => {
        try {
            const response = await axios.get('/api/skill/list');
            dispatch(slice.actions.getSkillsListSuccess(response.data.skills));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function addSkill(skill, skills) {
    return async () => {
        try {
            const response = await axios.post('/api/skill/add-skill', { skill, skills });
            dispatch(slice.actions.addSkillSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function editSkill(skill, skills) {
    return async () => {
        try {
            const response = await axios.post('/api/skill/edit-skill', { skill, skills });
            dispatch(slice.actions.editSkillSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function deleteSkill(skillId, skills) {
    return async () => {
        try {
            const response = await axios.post('/api/skill/delete-skill', { skills, skillId });
            dispatch(slice.actions.deleteSkillSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function deleteSkills(skillIds, skills) {
    return async () => {
        try {
            const response = await axios.post('/api/skill/delete-skills', { skills, skillIds });
            dispatch(slice.actions.deleteSkillsSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

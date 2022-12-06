// third-party
import { combineReducers } from 'redux';

// project imports
import snackbarReducer from './slices/snackbar';
import departmentReducer from './slices/department';
import skillReducer from './slices/skill';
import userReducer from './slices/user';
import quizReducer from './slices/quiz';
import resultReducer from './slices/result';

import menuReducer from './slices/menu';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    snackbar: snackbarReducer,
    department: departmentReducer,
    quiz: quizReducer,
    result: resultReducer,
    menu: menuReducer,
    skill: skillReducer,
    user: userReducer
});

export default reducer;

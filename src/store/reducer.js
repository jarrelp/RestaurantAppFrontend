// third-party
import { combineReducers } from 'redux';

// project imports
import departmentReducer from './slices/department';

import menuReducer from './slices/menu';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    department: departmentReducer,
    menu: menuReducer
});

export default reducer;

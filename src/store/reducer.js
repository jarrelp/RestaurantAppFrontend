import { combineReducers } from 'redux';

// reducer import
import menuReducer from './menuReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    menu: menuReducer
});

export default reducer;

import {combineReducers} from 'redux';
import {userReducer} from './user/user.reducer';
import {headerReducer} from './header/header.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    header: headerReducer
});

export default rootReducer;
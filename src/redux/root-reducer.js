import {combineReducers} from 'redux';
import {userReducer} from './user/user.reducer';
import {headerReducer} from './header/header.reducer';

// redux Persist
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const rootReducer = combineReducers({
    user: userReducer,
    header: headerReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['rootReducer']
}

export default persistReducer(persistConfig, rootReducer);
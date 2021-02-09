import USER_ACTION_TYPES from './user.type';

const INITIAL_STATE = {
    currentUser: null,
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_ACTION_TYPES.CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}
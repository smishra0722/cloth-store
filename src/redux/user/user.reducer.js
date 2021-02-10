import USER_ACTION_TYPES from './user.type';

const INITIAL_STATE = {
    currentUser: null,
    hidden: false
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_ACTION_TYPES.CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case USER_ACTION_TYPES.TOGGLE_USER_ICON:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}
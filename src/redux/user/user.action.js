import USER_ACTION_TYPES from './user.type';

const currentUser = (user) => ({
    type: USER_ACTION_TYPES.CURRENT_USER,
    payload: user
});

export const toggleUserSec = (user) => ({
    type: USER_ACTION_TYPES.TOGGLE_USER_ICON
});

export default currentUser;
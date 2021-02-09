import USER_ACTION_TYPES from './user.type';

const currentUser = (user) => ({
    type: USER_ACTION_TYPES.CURRENT_USER,
    payload: user
});

export default currentUser;
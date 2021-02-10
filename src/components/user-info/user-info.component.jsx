import React from 'react';
import './user-info.styles.scss';

import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils';
import {withRouter} from 'react-router-dom';

const UserInfo = ({currentUser, history}) => (
    <div className='user-info'>
    {currentUser?<span className='user-name'>{currentUser.displayName}</span>: <span className='user-name'>Not signed In</span>}<span>{currentUser?<span className='sign-out' onClick={() => auth.signOut()}>Sign out</span>:<span className='sign-out' onClick={() => history.push('/signin')}>Sign In</span>}</span>
    </div>
);
const mapStateToProps = ({user: {currentUser}}) => ({
    currentUser
});
export default withRouter(connect(mapStateToProps)(UserInfo));
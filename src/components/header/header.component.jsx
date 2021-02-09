import React from 'react';
import './header.styles.scss';

//Route import
import {withRouter} from 'react-router-dom';

//Firebase import 
import {auth} from '../../firebase/firebase.utils';

//REdux import
import {connect} from 'react-redux';

const Header = ({currentUser}) => (
    <div className='header'>
        <div className='header-logo'>Cloth Store</div>
        <div className='header-navigation'>
            <ul className='links'>
                <li className='link'>Shop</li>
                <li className='link'>Contact</li>
                {currentUser?<li className='link' onClick={() => auth.signOut()}>Sign out</li>:<li className='link'>Sign In</li>}
            </ul>
            <div className='cart-icon'>Cart</div>
        </div>
    </div>
);
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
}); 


export default connect(mapStateToProps)(Header);
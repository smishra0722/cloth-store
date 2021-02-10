import React from 'react';
import './header-mod.styles.scss';

import {ReactComponent as Cart} from '../../assets/shopping-bag.svg';
import {ReactComponent as LogoIcon} from '../../assets/clothes-hanger.svg'; 

import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

import {withRouter, Redirect} from 'react-router-dom';

// const HeaderMod = ({match, currentUser, history}) => {
//     switch(match.path) {
//         case '/signin':
//             return (
//                 <div className='header'>
//                     <div className='header-logo'>Cloth Store</div>
//                     <div className='header-navigation'>
//                         <ul className='links'>
//                             {currentUser?<li className='link' onClick={() => {auth.signOut()}}>Sign out</li>:<li className='link'>Sign In</li>}
//                         </ul>
//                     </div>
//                 </div>
//             );
//         case '/':
//             return (
//                 <div className='header'>
//                     <div className='header-logo'>{match.path}</div>
//                     <div className='header-navigation'>
//                         <ul className='links'>
//                             <li className='link'>Shop</li>
//                             <li className='link'>Contact</li>
//                             {currentUser?<li className='link' onClick={() => {auth.signOut(); history.push('/signin')}}>Sign out</li>:<li className='link' onClick={() => history.push('/signin')}>Sign In</li>}
//                         </ul>
//                         <div className='cart-icon'>Cart</div>
//                     </div>
//                 </div>
//             );
        
//     }
// }

const HeaderMod = ({match, currentUser, history}) => {
    switch(match.path) {
        case '/signin':
            return (
                <div className='header'>
                <div className='header-top'>
                    <div className='header-top-logo' onClick={() => history.push('/')}><div className='logo-icon' ><LogoIcon className='logo' /></div><span className='site-title'>Cloth Store</span></div>
                    <div className='sign-up-link'>Don't have account?<span className='link' onClick={() => history.push('/signup')}>Sign up</span></div>
                </div>
                </div>
            );
        case '/signup':
            return (
                <div className='header'>
                <div className='header-top'>
                    <div className='header-top-logo' onClick={() => history.push('/')}><div className='logo-icon' ><LogoIcon className='logo' /></div><span className='site-title'>Cloth Store</span></div>
                    <div className='sign-up-link'>Already have account?<span className='link' onClick={() => history.push('/signin')}>Sign in</span></div>
                </div>
                </div>
            );
        case '/':
            return (
                <div className='header'>
                <div className='header-top'>
                    <div className='header-top-logo'><div className='logo-icon' onClick={() => history.push('/')}><LogoIcon className='logo' /></div><span className='site-title'>Cloth Store</span></div>
                    <div className='right'><div className='cart-icon'><Cart /><span className='item-count'>0</span></div>{currentUser?<span className='sign-out' onClick={() => auth.signOut()}>Sign out</span>:<span className='sign-out' onClick={() => history.push('/signin')}>Sign In</span>}{currentUser?<div className='user-info'>{currentUser.displayName.toUpperCase().slice(0, 1)}</div>:''}</div>
                    </div>
                    <div className='header-bottom'>
                        <ul className='navigation'>
                        <li className='link'>Home</li>
                        <li className='link'>Shop</li>
                        <li className='link'>About Us</li>
                        <li className='link'>Contact</li>
                        </ul>
                    </div>
                </div>
            );
        
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
}); 

export default withRouter(connect(mapStateToProps)(HeaderMod));

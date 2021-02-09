import React from 'react';
import './sign-in.styles.scss';

//Component import
import SignIn from '../../components/sign-in/sign-in.component';
import HeaderMod from '../../components/header-mod/header-mod.component';

const SignInSignUp = () => (
    <div>
        <HeaderMod />
        <div className='sign-in'>
        <SignIn />
        </div>
    </div>
);

export default SignInSignUp;
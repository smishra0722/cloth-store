import React from 'react';
import './sign-up.styles.scss';

//Component import
import SignUp from '../../components/sign-up/sign-up.component';
import HeaderMod from '../../components/header-mod/header-mod.component';

const SignInSignUp = () => (
    <div>
        <HeaderMod />
        <div className='sign-up'>
        <SignUp />
        </div>
    </div>
);

export default SignInSignUp;
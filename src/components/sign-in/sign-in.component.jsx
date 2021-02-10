import React from 'react';
import './sign-in.styles.scss';

//Firebase import
import {SignInWithGoogle, auth, firebase} from '../../firebase/firebase.utils';


//Component import 
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
class SignIn extends React.Component{
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        try{
            let user = await auth.signInWithEmailAndPassword(email, password);
        } catch(error) {
            console.log(error.message);
        }
        this.setState({email: '', password: ''});
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    render() {
        const {email, password} = this.state;
        return (
            <div className='sign-in'>
                <h2 className='title'>Sign In</h2>
                <form className='form' onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} type='email' name='email' onChange={this.handleChange} value={email} label='enter email' />
                    <FormInput handleChange={this.handleChange} type='password' name='password' onChange={this.handleChange} value={password} label='enter password' />
                    <div className='button-container'>
                        <CustomButton className='custom-button'>Sign In</CustomButton>
                        <CustomButton className='custom-button google-button' onClick={SignInWithGoogle}>Google Sign In</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
} 


export default SignIn;
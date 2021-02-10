import React from 'react';
import './sign-up.styles.scss';

//Firebase import
import  {auth, createUserProfile} from '../../firebase/firebase.utils';

// Router import
import {withRouter} from 'react-router-dom';

//Component import 
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
class SignUp extends React.Component{
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            registeredSuccesfully: false
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        const {history} = this.props;
        if(password !== confirmPassword) return;
        try {
            let {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfile(user, {displayName});
            
            console.log(user);
            this.setState({email: '', password: '', registeredSuccesfully: true});
            auth.signOut();
        } catch(error) {
            console.log(error.message);
        }
        
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    render() {
        const {displayName, email, password, confirmPassword, registeredSuccesfully} = this.state;
        const {history} = this.props;
        return (
            <div className='sign-up'>
                {
                    registeredSuccesfully?<div className='success-message'><span className='message-text'>Registered Succesfully</span><CustomButton className='custom-button redirect-signin' onClick={() => history.push('/signin')}>Go to Sign in page</CustomButton></div>:''
                }
                <h2 className='title'>Sign Up</h2>
                <form className='form' onSubmit={this.handleSubmit}>
                <FormInput handleChange={this.handleChange} type='text' name='displayName' onChange={this.handleChange} value={displayName} label='enter name' required/>
                    <FormInput handleChange={this.handleChange} type='email' name='email' onChange={this.handleChange} value={email} label='enter email' required/>
                    <FormInput handleChange={this.handleChange} type='password' name='password' onChange={this.handleChange} value={password} label='enter password' required/>
                    <FormInput handleChange={this.handleChange} type='password' name='confirmPassword' onChange={this.handleChange} value={confirmPassword} label='confirm password' required/>
                    <div className='button-container'>
                        <CustomButton className='custom-button'>Register</CustomButton>
                    </div>
                </form>
                
            </div>
        )
    }
} 


export default withRouter(SignUp);
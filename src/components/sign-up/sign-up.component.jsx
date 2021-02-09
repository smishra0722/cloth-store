import React from 'react';
import './sign-up.styles.scss';


//Component import 
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
class SignUp extends React.Component{
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    render() {
        const {name, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>Sign Up</h2>
                <form className='form' onSubmit={this.handleSubmit}>
                <FormInput handleChange={this.handleChange} type='text' name='name' onChange={this.handleChange} value={name} label='enter name' required/>
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


export default SignUp;
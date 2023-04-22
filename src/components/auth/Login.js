import React, { useState } from 'react';
import { handleUserLogin } from '../../firebase/firebase';
import { Button, Divider, Input, Dimmer, Loader } from 'semantic-ui-react'
// import { createUser } from '../../firebase/firebase';
import Layout from '../layout/Layout';
import AuthTheme from './AuthTheme';
import '../../assets/styles/auth.css';
import { Header } from 'semantic-ui-react';

const Login = () => {
    const [inputData, setInputData] = useState({email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true)
        handleUserLogin(inputData).then((data) => {
            // get user details 
            console.log(data, 'hello login ',isLoading)
        }).finally(() => setIsLoading(false));
    }
    return (
        <Layout>
        <AuthTheme imageUrl={'../../assets/images/login.jpg'}>
            {isLoading ?       <Dimmer active inverted> <Loader size='big' /> </Dimmer> : (
            <div className='opt-signup-inner-container'>
                <Header>Login In</Header>
                <div className='opt-auth-input-container'>
                    <p>Email</p>
                    <Input type='text' value={inputData.email} placeholder="abc@gmail.com" onChange={(e) => setInputData({ ...inputData, email: e.target.value })}  />
                </div>
                <div className='opt-auth-input-container'>
                    <p>Password</p>
                    <Input type='password' value={inputData.password} placeholder="abc@gmail.com" onChange={(e) => setInputData({ ...inputData, password: e.target.value })}  />
                </div>
                <Button fluid onClick={() => handleLogin()} className='opt-primary-button'>Submit</Button>
                <Divider horizontal>OR</Divider>
                    <span>Dont have an account?<a href='/signup'>Sign Up.</a></span>
            </div>
            )}
        </AuthTheme>
        </Layout>
    )
}

export default Login;
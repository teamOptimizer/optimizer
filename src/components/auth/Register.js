import React, { useState } from 'react';
import { Button, Divider, Input, Label } from 'semantic-ui-react'
import { createUser } from '../../firebase/firebase';
import Layout from '../layout/Layout';
import AuthTheme from './AuthTheme';
import '../../assets/styles/auth.css';
import { Header } from 'semantic-ui-react';

const Login = () => {
    const [inputData, setInputData] = useState({email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(inputData).then((data) => {
            // get user details 
        })
    }
    return (
        <Layout>
        <AuthTheme imageUrl={'../../assets/images/login.jpg'}>
            <div className='opt-signup-inner-container'>
                <Header>Sign up</Header>
                <div className='opt-auth-input-container'>
                    <p>Email</p>
                    <Input type='text' value={inputData.email} placeholder="abc@gmail.com" onChange={(e) => setInputData({ ...inputData, email: e.target.value })}  />
                </div>
                <div className='opt-auth-input-container'>
                    <p>Password</p>
                    <Input type='password' value={inputData.password} placeholder="abc@gmail.com" onChange={(e) => setInputData({ ...inputData, password: e.target.value })}  />
                </div>
                <Button fluid onClick={() => handleSubmit()} className='opt-primary-button'>Submit</Button>
                <Divider horizontal>OR</Divider>
                    <span>Already had a account? <a href='/login'>Login.</a></span>
            </div>
        </AuthTheme>
        </Layout>
    )
}

export default Login;
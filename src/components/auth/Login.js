import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleUserLogin, getUserDetails } from '../../firebase/firebase';
import { Button, Divider, Input, Dimmer, Loader } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react';
import Layout from '../layout/Layout';
import AuthTheme from './AuthTheme';
import AuthContext from '../authContext/AuthContext';
import '../../assets/styles/auth.css';


const Login = () => {
    const [inputData, setInputData] = useState({email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const { setUserDetails } = useContext(AuthContext);

    const handleLogin = (e) => {
        setIsLoading(true)
        handleUserLogin(inputData).then(async (data) => {
            // get user details 
            const userDetails = await getUserDetails(data.user.uid);
            setUserDetails({ accessToken: data.user.accessToken, isLoggedIn: true, userDetails });
            navigate('/')
        }).finally(() => setIsLoading(false));
    }
    return (
        <Layout>
        <AuthTheme>
            {isLoading ? <Dimmer active inverted> <Loader size='big' /> </Dimmer> : (
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
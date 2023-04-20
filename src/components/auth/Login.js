import React, { useState } from 'react';
import { handleUserLogin } from '../../firebase/firebase';

const Login = () => {
    const [inputData, setInputData] = useState({email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true)
        handleUserLogin(inputData).then((data) => {
            // get user details 
            console.log(data, 'hello login ')
        }).finally(() => setIsLoading(false));
    }
    return (
        <div>
            <input value={inputData.email} onChange={(e) => setInputData({ ...inputData, email: e.target.value })} />
            <input value={inputData.password} onChange={(e) => setInputData({ ...inputData, password: e.target.value })} />
            <button onClick={handleLogin}>Submit</button>
        </div>
    )
}

export default Login;
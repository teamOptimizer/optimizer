import React, { useState } from 'react';
import { createUser } from '../../firebase/firebase';

const Login = () => {
    const [inputData, setInputData] = useState({email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(inputData).then((data) => {
            // get user details 
        })
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column' }}>
            <button>Login</button>
            <input value={inputData.email} onChange={(e) => setInputData({ ...inputData, email: e.target.value })} />
            <input value={inputData.password} onChange={(e) => setInputData({ ...inputData, password: e.target.value })} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;
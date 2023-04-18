import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import '../../assets/styles/home.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="opt-header-container">
            <img src={require('../../assets/images/logo.png')} className='opt-home-logo' />
            <div>
                <Button onClick={() => navigate('/login')}>Login</Button>
                <Button onClick={() => navigate('/register')}>Register</Button>
            </div>
        </div>
    )
}

export default Header;
import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Menu } from 'semantic-ui-react';
import '../../assets/styles/home.css';

const Footer = () => {
    // const navigate = useNavigate();
    return (
        <div className='opt-footer-container'>
            <div className='opt-body-container'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">SignUp</a></li>
                    <li><a href="#">Happy Stories</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
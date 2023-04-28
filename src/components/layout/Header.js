/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Menu } from 'semantic-ui-react';
import '../../assets/styles/home.css';
import MobileHeader from './MobileHeader';

function Header({ toggleSidebar }) {
    const navigate = useNavigate();
    return (
        <div className="opt-header-container">
            <Grid>
                <Grid.Row only="computer">
                    <Grid.Column>
                        <div className="opt-header-inner-container">
                            <img
                                src={require('../../assets/images/logo.png')}
                                className="opt-home-logo"
                                alt="logo"
                            />
                            <div>
                                <Menu text className="opt-main-header">
                                    <Menu.Item
                                        name="Home" // active={activeItem === 'closest'}
                                        onClick={() => navigate('/')}
                                    />
                                    <Menu.Item
                                        name="Happy Stories"// active={activeItem === 'mostComments'}
                                        onClick={() => navigate('/')}
                                    />
                                    <Menu.Item
                                        name="Login"// active={activeItem === 'mostPopular'}
                                        onClick={() => navigate('/login')}
                                    />
                                    <Menu.Item
                                        name="Register" // active={activeItem === 'mostPopular'}
                                        onClick={() => navigate('/signup')}
                                    />
                                    <Menu.Item
                                        name="Events" // active={activeItem === 'mostPopular'}
                                        onClick={() => navigate('/events')}
                                    />
                                </Menu>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row only='mobile tablet'>
                    <Grid.Column>
                        <MobileHeader toggleSidebar={toggleSidebar} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default Header;

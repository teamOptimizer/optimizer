/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Grid, Icon, Menu } from 'semantic-ui-react';
import AuthContext, { initialUserDetails } from '../authContext/AuthContext';
import MobileHeader from './MobileHeader';
import { logout } from '../../firebase/firebase';
import '../../assets/styles/home.css';


function Header({ toggleSidebar }) {
    const navigate = useNavigate();
    const { userDetails, setUserDetails } = useContext(AuthContext);
    const signOutUser = async () => {
        logout().then(() => {
            setUserDetails(initialUserDetails);
        });
    }
    console.log(userDetails, 'hello userDetails');
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
                                        name="Events" // active={activeItem === 'mostPopular'}
                                        onClick={() => navigate('/events')}
                                    />
                                    {userDetails?.isLoggedIn ? (
                                        <>
                                        <Menu.Item>
                                            <Icon name='bell' link onClick={() => navigate('/notifications')} />
                                        </Menu.Item>
                                        <Menu.Item>
                                            {/* <Icon name='bell' link onClick={() => navigate('/notifications')} /> */}
                                            <Dropdown
                                            button 
                                            className='icon opt-myAccount-dropdown'
                                            icon="user"
                                            floating
                                            labeled
                                            text='My Account'
                                            >
                                                <Dropdown.Menu>
                                                    <Dropdown.Header>Hi {userDetails?.userData?.name}</Dropdown.Header>
                                                    <Dropdown.Item as="a" href="/edit-profile">Edit Profile</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => signOutUser()}>Logout</Dropdown.Item>
                                                </Dropdown.Menu>
                                                </Dropdown>
                                        </Menu.Item>
                                    </>
                                    ) : (
                                        <>
                                        <Menu.Item
                                            name="Login"// active={activeItem === 'mostPopular'}
                                            onClick={() => navigate('/login')}
                                        />
                                        <Menu.Item
                                            name="Register" // active={activeItem === 'mostPopular'}
                                            onClick={() => navigate('/signup')}
                                        />
                                    </>
                                    )}
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

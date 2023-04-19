import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import '../../assets/styles/home.css';

const Header = () => {
	const navigate = useNavigate();
	return (
		<div className="opt-header-container">
			<div className="opt-header-inner-container">
				<img src={require('../../assets/images/logo.png')}
					className='opt-home-logo' />
				<div>
					<Menu text className='opt-main-header'>
						<Menu.Item
							name='Home'
							// active={activeItem === 'closest'}
							onClick={navigate('/')}
						/>
						<Menu.Item
							name='Happy Stories'
							// active={activeItem === 'mostComments'}
							onClick={navigate('/')}
						/>
						<Menu.Item
							name='Login'
							// active={activeItem === 'mostPopular'}
							onClick={navigate('/login')}
						/>
						<Menu.Item
							name='Register'
							// active={activeItem === 'mostPopular'}
							onClick={navigate('/register')}
						/>
					</Menu>
				</div>
			</div>
		</div>
	);
};

export default Header;

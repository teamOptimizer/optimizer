import React from 'react';
import { Image, Icon } from 'semantic-ui-react';

const MobileHeader = ({ toggleSidebar }) => {
    return (
        <div className="opt-mobile-header-row">
            <Icon name="sidebar" size="large" link onClick={() => toggleSidebar(true)} className='opt-menu-bar-icon' />
            <Image size="small" src={require('../../assets/images/logo.png')} />
            <a href='/notifications'><Icon name="bell" /></a>
        </div>
    )
}

export default MobileHeader;
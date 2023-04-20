import React from 'react';
import { Image, Icon } from 'semantic-ui-react';

const MobileHeader = ({ setIsSidebarVisible }) => {
    return (
        <div className="opt-mobile-header-row">
            <Icon name="sidebar" size={23} className='opt-menu-bar-icon' />
            <Image size="small" src={require('../../assets/images/logo.png')} />
            <Icon name="bell" />
        </div>
    )
}

export default MobileHeader;
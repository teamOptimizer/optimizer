import React, { useState} from "react";
import { Sidebar, Segment, Menu } from "semantic-ui-react";
import Header from "./Header";
import MobileHeader from './MobileHeader';
import Footer from "./Footer";
import '../../assets/styles/layout.css';

const Layout = ({ children }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    return (
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setIsSidebarVisible(false)}
            vertical
            visible={isSidebarVisible}
            width='thin'
          >
            </Sidebar>
            <Sidebar.Pusher>
                <>
                    <Header />
                    <MobileHeader />
                    <div className="opt-body-container">{children}</div>
                    <Footer />
                </>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    )
}

export default Layout
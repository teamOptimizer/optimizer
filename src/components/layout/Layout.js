import React, { useState, useEffect, useRef } from 'react';
import { Sidebar, Segment, Menu } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';
import '../../assets/styles/layout.css';

function Layout({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const scroller = useRef();
 
  useEffect(() => {
      function updateScrollPosition() {
          // update the scroll position
          console.log('e')
      }

      // if (scroller && scroller.current) {
      //     scroller.current.addEventListener("scroll", updateScrollPosition, false);
      //     return function cleanup() {
      //          scroller.current.removeEventListener("scroll", updateScrollPosition, false);
      //     };
      // }
  }, []);

  return (
    <div ref={scroller}>
    <Sidebar.Pushable as={Segment} className="opt-layout-container">
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={() => setIsSidebarVisible(false)}
        vertical
        visible={isSidebarVisible}
        width="thin"
      />
      <Sidebar.Pusher>
        <>
          {/* <Header toggleSidebar={setIsSidebarVisible} /> */}
            <div className="opt-body-container">{children}</div>
          <Footer />
        </>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
    </div>
  );
}

export default Layout;

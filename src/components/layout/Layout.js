import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../../assets/styles/layout.css';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
                <div className="opt-body-container">{children}</div>
            <Footer />
        </>
    )
}

export default Layout
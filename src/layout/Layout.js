import React from 'react';
import Navbar from "./Navbar";
import SubTopbar from "./SubTopbar";
import Topbar from "./Topbar";
import Page from "./Page";

const Layout = ({children}) => {
    return (
        <div className={'layout'}>
                <Navbar/>
                <Topbar />
                <SubTopbar />
            <div className={'content'}>
                <Page>
                    {children}
                </Page>
            </div>
        </div>
    );
};

export default Layout;
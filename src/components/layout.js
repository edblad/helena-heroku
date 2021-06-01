import React from 'react';
import Header from './header/header.js'

const Layout = (props) => {    
    return (
        <div>
            <Header />
            {props.children}
        </div>
    )
}



export default Layout;
import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = (props) => {    
    return (
        <header>
            <div class="logo"><Link to="/">LOGO</Link></div>
            <nav>
                <ul>
                    <li><Link to="/">Hem</Link></li>
                    <li><Link to="/blue">Blå</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
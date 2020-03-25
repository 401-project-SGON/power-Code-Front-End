import React from 'react'
import { NavLink } from 'react-router-dom'
import '../header/header.scss';
const Header = (props) => {

    return (
        <>
        <header>
        {/* <img style={{zIndex: '1' , marginTop:'-20px'}} src={require('../slide/assets/slide1.jpg')} /> */}

        </header>
            <nav style={{ position: 'relative', zIndex: '2' }}>

                <NavLink to="/" exact>Home</NavLink>{' | '}

                <NavLink to="/about" exact>About</NavLink>{' | '}

                <NavLink to="/contactUs" >Contact Us</NavLink>
            </nav>
        </>
    )

}



export default Header;
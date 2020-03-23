import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = (props) =>{

    return(
        <>
    <h1>header</h1>
    <ul>
    <li>
        <NavLink to='/'>Home</NavLink>
    </li>
    </ul>
    </>
    )

}

export default Header
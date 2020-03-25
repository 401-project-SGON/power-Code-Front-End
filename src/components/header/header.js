import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
const Header = (props) => {

    return (
        <>
            <h1>header</h1>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home"><NavLink to='/'>Home</NavLink></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1"><NavLink to='/data'>Courses</NavLink></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2"><NavLink to='/data'><NavLink to='/code'>Code Editor</NavLink></NavLink></Nav.Link>
                </Nav.Item>
                
            </Nav>
           
        </>
    )

}

export default Header
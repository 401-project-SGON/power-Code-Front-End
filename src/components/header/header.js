import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Nav, Navbar, Form, Button, FormControl, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { If, Then } from './../if'
import Signup from './../auth/signup.js'
import Login from './../auth/login.js';
import './header.css'



const Header = (props) => {

    return (
        <>
            <Navbar bg="light" variant="dark" sticky="top">
                <Navbar.Brand><NavLink to='/'><img src='https://i.ibb.co/k3Rq69C/Screenshot-477.png' style={{borderRadius:'12px'}} height='45' width='45' /></NavLink></Navbar.Brand>
                <If condition={props.reducer.loggedIn}><Then>

                    <Nav className="mr-auto">
                        <Nav.Link ><NavLink to='/data'>Courses</NavLink></Nav.Link>
                        <Nav.Link ><NavLink to='/code'>Code Editor</NavLink></Nav.Link>
                        {/* <Nav.Link ><NavLink to='/user'><img src='https://cdn2.iconfinder.com/data/icons/circular-icons-filled/78/Circular_Person-512.png' height='30' width='30' /></NavLink></Nav.Link> */}
                        {/* <Nav.Link ><NavLink to='/feedback'><img src='https://cdn1.iconfinder.com/data/icons/feedback-review/64/x-05-512.png' height='30' width='35' /></NavLink></Nav.Link> */}
                    </Nav>
                </Then></If>
                <Form inline>

                    <Signup className='signup' />

                    <If condition={!props.reducer.loggedIn} ><Then>
                        <Login />

                    </Then></If>

                    <If condition={props.reducer.loggedIn}>
                        <Then>
                            <NavDropdown title={props.reducer.user.username} id="basic-nav-dropdown">
                                <NavDropdown.Item ><NavLink id="RouterNavLink" to='/user'>My Info</NavLink></NavDropdown.Item>

                                <NavDropdown.Item ><img src={props.reducer.user.url} height='50' width='50' /></NavDropdown.Item>
                                <NavDropdown.Divider />

                                <div className='loginIcon'>
                                <Login />
                                </div>

                            </NavDropdown>
                            <img src={props.reducer.user.url} height='45' width='45' />

                        </Then>
                    </If>
                </Form>
            </Navbar>
        </>
    )

}

const mapStateToProps = state => ({
    reducer: state.reducer
});


export default connect(
    mapStateToProps
)(Header);
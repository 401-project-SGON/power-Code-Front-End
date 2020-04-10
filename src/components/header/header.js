import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Nav, Navbar, Form, Button, FormControl, NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { If, Then } from './../if'
import Signup from './../auth/signup.js'
import Login from './../auth/login.js';
import Chat from '../chat/chat.js'
import './header.css'




const ChatBox = () => {
    return (
        <>
        <style type="text/css">
    {`
    .dropdown-menu{
        min-width: 33rem;
    }
    `}
  </style>
        <section className='c' >
            <Dropdown>
                <Dropdown.Toggle as={'href'} id="dropdown-basic-button" title="let's chat">

                    Let's Chat
                </Dropdown.Toggle>
                <Dropdown.Menu >
                    <Dropdown.Item ><Chat /></Dropdown.Item>
                </Dropdown.Menu>

            </Dropdown>
        </section>
        </>
    )
}


const nav = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Navbar.Brand><NavLink to='/'><img src='https://i.ibb.co/k3Rq69C/Screenshot-477.png' style={{ borderRadius: '10px' }} height='45' width='50' /></NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <If condition={props.reducer.loggedIn}><Then>

                        <Nav.Link ><NavLink style={{ textDecoration: 'none', fontFamily: " 'Roboto', sansSerif" }} to='/data'>Courses</NavLink></Nav.Link>
                        <Nav.Link ><NavLink style={{ textDecoration: 'none', fontFamily: " 'Roboto', sansSerif" }} to='/code'>Code Editor</NavLink></Nav.Link>
                        {/* <Nav.Link ><NavLink to='/feedback'><img src='https://cdn1.iconfinder.com/data/icons/feedback-review/64/x-05-512.png' height='30' width='35' /></NavLink></Nav.Link> */}
                        <ChatBox />


                    </Then></If>

                    <Signup className='signup' />

                    <If condition={!props.reducer.loggedIn} ><Then>
                        <Login />

                    </Then></If>


                </Nav>
                <Nav>
                    <If condition={props.reducer.admin} ><Then>

                        <Nav.Link ><NavLink to='/admintool'><img src='https://cdn2.hubspot.net/hub/189007/file-526634248-png/google-apps-admin-panel-icon.png' height='35' width='35' /></NavLink></Nav.Link>
                    </Then></If>

                    <If condition={props.reducer.loggedIn}>
                        <Then>
                            <NavDropdown style={{ textDecoration: 'none', fontFamily: " 'Roboto', sansSerif", fontWeight: 'bold' }} title={props.reducer.user.username} id="collasible-nav-dropdown">
                                <NavDropdown.Item ><NavLink style={{ textDecoration: 'none', fontFamily: " 'Roboto', sansSerif" }} id="RouterNavLink" to='/user'>My Info</NavLink></NavDropdown.Item>

                                <NavDropdown.Item ><img src={props.reducer.user.url} height='50' width='50' /></NavDropdown.Item>
                                <NavDropdown.Divider />

                                <div className='loginIcon'>
                                    <Login />
                                </div>

                            </NavDropdown>
                            <img className='profileImg' src={props.reducer.user.url} height='45' width='45' />

                        </Then>
                    </If>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
// const Header = (props) => {

//     return (
//         // <div className='mainHeader'>
//         <Navbar bg="light" variant="dark" sticky="top">
//             <Navbar.Brand><NavLink to='/'><img src='https://i.ibb.co/k3Rq69C/Screenshot-477.png' style={{ borderRadius: '12px' }} height='45' width='50' /></NavLink></Navbar.Brand>
//             <If condition={props.reducer.loggedIn}><Then>

//                 <Nav className="mr-auto">
//                     <Nav.Link ><NavLink style={{ textDecoration: 'none', fontFamily: " 'Roboto', sansSerif" }} to='/data'>Courses</NavLink></Nav.Link>
//                     <Nav.Link ><NavLink style={{ textDecoration: 'none', fontFamily: " 'Roboto', sansSerif" }} to='/code'>Code Editor</NavLink></Nav.Link>
//                     {/* <Nav.Link ><NavLink to='/feedback'><img src='https://cdn1.iconfinder.com/data/icons/feedback-review/64/x-05-512.png' height='30' width='35' /></NavLink></Nav.Link> */}
//                     <ChatBox />

//                 </Nav>
//             </Then></If>
//             {/* <Form inline> */}

//             <Signup className='signup' />

//             <If condition={!props.reducer.loggedIn} ><Then>
//                 <Login />

//             </Then></If>



//             <If condition={props.reducer.admin} ><Then>

//                 <Nav.Link ><NavLink to='/admintool'><img src='https://cdn2.hubspot.net/hub/189007/file-526634248-png/google-apps-admin-panel-icon.png' height='35' width='35' /></NavLink></Nav.Link>
//             </Then></If>

//             <If condition={props.reducer.loggedIn}>
//                 <Then>
//                     <NavDropdown style={{ textDecoration: 'none', fontFamily: " 'Roboto', sansSerif" }} title={props.reducer.user.username} id="basic-nav-dropdown">
//                         <NavDropdown.Item ><NavLink style={{ textDecoration: 'none', fontFamily: " 'Roboto', sansSerif" }} id="RouterNavLink" to='/user'>My Info</NavLink></NavDropdown.Item>

//                         <NavDropdown.Item ><img src={props.reducer.user.url} height='50' width='50' /></NavDropdown.Item>
//                         <NavDropdown.Divider />

//                         <div className='loginIcon'>
//                             <Login />
//                         </div>

//                     </NavDropdown>
//                     <img src={props.reducer.user.url} height='45' width='45' />

//                 </Then>
//             </If>
//             {/* </Form> */}
//         </Navbar>
//         //  {/* </div> */}
//     )

// }

const mapStateToProps = state => ({
    reducer: state.reducer
});


export default connect(
    mapStateToProps
)(nav);
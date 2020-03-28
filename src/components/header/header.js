import React from 'react'
import { NavLink ,Link} from 'react-router-dom'
import { Nav, Navbar, Form, Button, FormControl,NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { If, Then } from './../if'
import Signup from './../auth/signup.js'
import Login from './../auth/login.js';



const Header = (props) => {

    return (
        <>


            <Navbar bg="dark" variant="dark">
                <Navbar.Brand><NavLink to='/'><img src='https://cdn2.iconfinder.com/data/icons/circular-icons-filled/78/Circular_House-512.png' height='40' width='40' /></NavLink></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link ><NavLink to='/data'>Courses</NavLink></Nav.Link>
                    <Nav.Link ><NavLink to='/code'>Code Editor</NavLink></Nav.Link>
                    <Nav.Link ><NavLink to='/chat'><img src='https://cdn2.iconfinder.com/data/icons/communication-vol-1-4/16/chat-bubble-message-speech.6-512.png' height='30' width='30' /></NavLink></Nav.Link>
                    <Nav.Link ><NavLink to='/user'><img src='https://cdn2.iconfinder.com/data/icons/circular-icons-filled/78/Circular_Person-512.png' height='30' width='30' /></NavLink></Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="primary">Search</Button>{' _ '}
                    <Signup />
                    <Login />

                    <If condition={props.reducer.user.url}>
                        <Then>
                            <NavDropdown title={props.reducer.user.username} id="basic-nav-dropdown">
                                <NavDropdown.Item ><NavLink id="RouterNavLink" to='/user'>My Info</NavLink></NavDropdown.Item>
                                
                                <NavDropdown.Divider />
                                <NavDropdown.Item ><img src={props.reducer.user.url} height='50' width='50' /></NavDropdown.Item>
                                

                            </NavDropdown>
                            <img src={props.reducer.user.url} height='45' width='45' />


                            
                        </Then>
                    </If>
                </Form>
            </Navbar>

            {/* <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="/"><NavLink to='/'><img src='https://cdn2.iconfinder.com/data/icons/circular-icons-filled/78/Circular_House-512.png' height='30' width='30'/></NavLink></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1"><NavLink to='/data'>Courses</NavLink></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2"><NavLink to='/code'>Code Editor</NavLink></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3"><NavLink to='/chat'><img src='https://cdn2.iconfinder.com/data/icons/communication-vol-1-4/16/chat-bubble-message-speech.6-512.png' height='30' width='30'/></NavLink></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4"><NavLink to='/user'><img src='https://cdn2.iconfinder.com/data/icons/circular-icons-filled/78/Circular_Person-512.png' height='30' width='30'/></NavLink></Nav.Link>
                </Nav.Item>
                
                
            </Nav> */}

            {/* <If condition={props.reducer.user.url}>
                <Then>
                    <img src={props.reducer.user.url} height='60' width='70' />
                </Then>
            </If> */}

        </>
    )

}

const mapStateToProps = state => ({
    reducer: state.reducer
});


export default connect(
    mapStateToProps
)(Header);
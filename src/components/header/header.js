import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import {If ,Then} from './../if'

const Header = (props) => {

    return (
        <>
            <h1>header</h1>
            <If condition={props.reducer.user.url}>
                <Then>
                 <img src={props.reducer.user.url} height='60' width='70'/>
                </Then>
            </If>

            <Nav variant="tabs" defaultActiveKey="/home">
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
                
                
            </Nav>

        </>
    )

}

const mapStateToProps = state => ({
    reducer: state.reducer
});


export default connect(
    mapStateToProps
)(Header);
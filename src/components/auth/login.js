import React from 'react';
import { connect } from 'react-redux'
import cookie from 'react-cookies';
import { login, logout, validateToken, signup } from '../../store/actions.js'
import { Form, Button,Spinner } from 'react-bootstrap'
import './login.css'
import Example from './../modal/modal.js'



const If = props => {
  return props.condition ? props.children : null;
};


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '', email: '', phone: '', url: '' };
  }

  componentDidMount() {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');
    const token = qs.get('token') || cookieToken || null;
    this.props.dispatch(validateToken(token));
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    if(e)e.preventDefault();
    
    this.props.dispatch(login({ 'username': this.state.username, 'password': this.state.password }))
  };
 


  render() {
    return (
      <>
      <If condition={!this.props.reducer.loggedIn}>
      <Example buttonHandle={this.handleSubmit} button={'SignIn'} name='SignIn' closehand={this.props.reducer.signing} header='Sign in' shape='button'>

     
        <section className='form'>

          
            <Form className='form2' onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control size="sm" name='username' onChange={this.handleChange} placeholder="Enter username" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control size="sm" name='password' onChange={this.handleChange} type="password" placeholder="Password" />
              </Form.Group>

            </Form>
         <If condition={this.props.reducer.signing}>
         <Spinner animation="border" />
         </If>
        </section>
        </Example>
        </If>
         <If condition={this.props.reducer.loggedIn}>
         <Button variant="primary" onClick={() => this.props.dispatch(logout())}>Log Out</Button>
        
       </If>
       </>
    );
  }
}

const mapStateToProps = state => ({
  reducer: state.reducer
});


export default connect(
  mapStateToProps
)(Login);

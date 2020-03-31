import React from 'react';
import { connect } from 'react-redux'
import cookie from 'react-cookies';
import { login, validateToken, signup, saveImage } from '../../store/actions.js'
import { Form, Button, Spinner } from 'react-bootstrap'
import './login.css'
import Example from './../modal/modal.js'
import { Then } from '../if/index.js';


const If = props => {
  return props.condition ? props.children : null;
};


class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '', email: '', phone: '', url: '' };
  }

  handleImage = (e) => {


    const files = Array.from(e.target.files)
    const formData = new FormData()
    files.forEach((file, i) => {
      formData.append(i, file)
    })

    this.props.dispatch(saveImage(formData))
      .then((data) => {
        this.setState({ url: data.value[0].url })
      })

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
    if (e) e.preventDefault();
    this.props.dispatch(login({ 'username': this.state.username, 'password': this.state.password }))
  };
  handleSubmit_signup = e => {
    if (e) e.preventDefault();

    this.props.dispatch(signup(
      {
        'username': this.state.username,
        'password': this.state.password,
        'email': this.state.email,
        'phone': this.state.phone,
        'url': this.state.url

      }))
  };


  render() {
    return (
      <If condition={!this.props.reducer.loggedIn}>
        <Example buttonHandle={this.handleSubmit_signup} button={'signup'} name='SignUp' closehand={this.props.reducer.signing} header='Sign up'>

          <section className='form'>


            <Form onSubmit={this.handleSubmit_signup}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control size="sm" name='username' onChange={this.handleChange} placeholder="Enter username" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control size="sm" name='email' onChange={this.handleChange} placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Phone number</Form.Label>
                <Form.Control size="sm" name='phone' onChange={this.handleChange} placeholder="Enter phone number" />
              </Form.Group>
              <Form.File
                id="custom-file"
                label="Upload your picture"
                name='url'
                onChange={this.handleImage}
                custom
              />

              <If condition={this.props.reducer.imageUploading}>

                <Spinner animation="border" size="sm" />

              </If>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control size="sm" name='password' onChange={this.handleChange} placeholder="Enter password" />
              </Form.Group>




              <If condition={this.props.reducer.signing}>

                <Spinner animation="border" />

              </If>
              <If condition={this.props.reducer.signup}>

                <h4>greate! register success</h4>

              </If>



            </Form>



          </section>
        </Example>
      </If>
    );
  }
}

const mapStateToProps = state => ({
  reducer: state.reducer
});


export default connect(
  mapStateToProps
)(Signup);

import React from 'react';
import { connect } from 'react-redux'
import cookie from 'react-cookies';
import { login, validateToken, signup,saveImage } from '../../store/actions.js'
import { Form, Button } from 'react-bootstrap'
import './login.css'
import Example from './../modal/modal.js'


const If = props => {
  return props.condition ? props.children : null;
};


class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' ,email:'',phone:'',url:''};
  }

 handleImage =(e)=>{
    
    
    const files = Array.from(e.target.files)
    const formData = new FormData()
    files.forEach((file, i) => {
      formData.append(i, file)
    })
   
    this.props.dispatch(saveImage(formData))
    .then((data)=>{
        this.setState({ url:data.value[0].url })
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
      if(e) e.preventDefault();
    this.props.dispatch(login({ 'username': this.state.username, 'password': this.state.password }))
  };
  handleSubmit_signup = e => {
    if(e) e.preventDefault();

    this.props.dispatch(signup(
      { 'username': this.state.username, 
      'password': this.state.password ,
      'email': this.state.email,
      'phone': this.state.phone,
      'url':this.state.url

    }))
  };


  render() {
    return (
        <If condition={!this.props.reducer.loggedIn}>
        <Example buttonHandle={this.handleSubmit_signup} button={'signup'} name='SignUp'>

      <section className='form'>
       

          <Form onSubmit={this.handleSubmit_signup}>
            <input
              placeholder="UserName"
              name="username"
              onChange={this.handleChange}
            />
            <input
              placeholder="email"
              name="email"
              onChange={this.handleChange}
            />
            <input
              placeholder="phone number"
              name="phone"
              onChange={this.handleChange}
            />
            <input
              type='file'
              name="url"
              onChange={this.handleImage}
            />
            <input
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />
            {/* <Button variant="primary" type="submit">
            signup
            </Button> */}
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

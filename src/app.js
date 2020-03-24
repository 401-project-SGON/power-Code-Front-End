import React from 'react';
import Auth from './components/auth/auth.js';
import Login from './components/auth/login.js';
import Data from './components/data/index.js'
import Header from './components/header/header.js'
import Footer from './components/footer/footer.js';
import { Switch, Route, Link } from "react-router-dom";
import Cours from './components/course/course.js';
import AboutPage from './components/about/about.js';
import ContactUs from './components/contact/contactUs.js';
import HomePage from './components/home/home.js';
import Slide from './components/slide/App.js';
import './app.scss';

const User = props => {
  return (
    <Auth capability="read">
      <Data />
      <Route path='/course'>
        <Cours />
      </Route>
    </Auth>
  );
};

const Editor = props => {
  return (
    <Auth capability="update">
    </Auth>
  );
};




const Admin = props => {
  return (
    <Auth capability="delete">
    </Auth>
  );
};

const App = (props) => {


  return (
    <>
      <Route path='/'>
        <Login />

        <Slide />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contactUs" component={ContactUs} />
        </Switch>



        {/* <Header /> */}



        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>




        <User />
        <Editor />
        <Admin />


        {/* <Footer /> */}

      </Route>
    </>
  );

}





export default App;
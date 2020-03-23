/* eslint-disable no-unused-vars */
import React from 'react';
import Auth from './components/auth/auth.js';
import Login from './components/auth/login.js';
import Data from './components/data/index.js';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home/home.js';
import AboutPage from './components/about/about.js';
import NotFound from './components/notFound.js';
import CoursesPage from './components/courses/coursesPage.js';
import Header from './components/header/header.js';
import './app.scss';


const User = props => {
  return (
    <Auth capability="read">
      <Data/>
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

const App = (props)=> {


  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/courses" component={CoursesPage}/>
        <Route component={NotFound}/>
      </Switch>

      <Login />
      <hr />
      <User/>
      <Editor />
      <Admin />
    </>
  );

};

export default App;

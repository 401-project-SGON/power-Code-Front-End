import React from 'react';
import Auth from './components/auth/auth.js';
import Login from './components/auth/login.js';
import Data from './components/data/index.js'
import Header from './components/header/header.js'
import Footer from './components/footer/footer.js';
import { Switch, Route, Link } from "react-router-dom";
import Cours from './components/course/course.js';
import Code from './components/codeEditor/codeEditor.js'
import Chat from './components/chat/chat.js'
import UserInfo from './components/userInfo/userInfo.js'
import Signup from './components/auth/signup.js'
import AdminTool from './components/adminTool/adminTool.js'

const User = props => {
  return (
    <Auth capability="read">

    <Switch>
      <Route path='/user'>
        <UserInfo />
      </Route>

      <Route path='/chat'>
        <Chat />
      </Route>

      <Route path='/code' >
        <Code />
      </Route>

      <Route path='/data'>
        <Data />
      </Route>

      <Route path='/course'>
        <Cours />
      </Route>
      </Switch>
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
    <AdminTool/>

    </Auth>
  );
};

const App = (props) => {


  return (
    <>
      <Route path='/'>
        <Signup />
        <Login />
        <Header />

        <hr />
        <User />
        <Editor />
        <Admin />
        <Footer />

      </Route>
    </>
  );

}

export default App;

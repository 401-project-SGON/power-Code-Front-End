import React from 'react';
import Auth from './components/auth/auth.js';
import Data from './components/data/index.js'
import Header from './components/header/header.js'
import Footer from './components/footer/footer.js';
import { Switch, Route, Link } from "react-router-dom";
import Cours from './components/course/course.js';
import Code from './components/codeEditor/codeEditor.js'
import Chat from './components/chat/chat.js'
import UserInfo from './components/userInfo/userInfo.js'
import AdminTool from './components/adminTool/adminTool.js'
import Main from './components/main/main.js'
import Feedback from './components/feedback/feedback.js'
import Test from './components/test/test.js'

const User = props => {
  return (
    <Auth capability="read">

    <Switch>
    <Route exact path='/'>
        <Main/>
      </Route>
      <Route exact path='/user'>
        <UserInfo />
      </Route>

      <Route exact path='/chat'>
        <Chat />
      </Route>

      <Route exact path='/code' >
        <Code />
      </Route>

      <Route exact path='/data'>
        <Data />
      </Route>

      <Route exact path='/subject'>
        <Cours />
      </Route>
      <Route exact path='/feedback'>
      <Feedback/>
      </Route>

      <Route exact path='/test'>
      <Test/>
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
      

        <Header />

        <hr />

        <User />
        <Editor />
        <Admin />
        <Footer />

    </>
  );

}

export default App;

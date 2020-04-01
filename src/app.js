import React from 'react';
import './index.css'
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
import {DropdownButton,Dropdown} from 'react-bootstrap'
// import Chat from './components/chat/chat.js'
import ContactUs from './components/contact/contactUs.js'



const ChatBox= ()=>{
  return(
<section className='c'>
<DropdownButton id="dropdown-button-drop-up" drop='up' title="let's chat">
  <Dropdown.Item as="button"><Chat/></Dropdown.Item>

</DropdownButton>
</section>
  )
}


const User = props => {
  return (
    <Auth capability="read">
      <ChatBox/>
    <Switch>
      {/* <Route exact path='contactUs'>
      <ContactUs/>
      </Route> */}
   
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
      <Route path="/contactUs" component={ContactUs}/>
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
      <section className='main'>

        <Header />
        <Route exact path='/'>
        <Main/>
        </Route>
        <User />
        <Editor />
        <Admin />
        
        <Footer />
        </section>
  );

}

export default App;

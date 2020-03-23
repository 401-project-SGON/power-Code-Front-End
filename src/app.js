import React from 'react';
import Auth from './components/auth/auth.js';
import Login from './components/auth/login.js';
import Data from './components/data/index.js'

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

const App =(props)=> {

   
    return (
     <>
        <Login />
        <hr />
        <User/>
        <Editor />
        <Admin />
     </>
    );
  
}

export default App;

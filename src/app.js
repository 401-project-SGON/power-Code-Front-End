import React from 'react';
import Auth from './components/auth/auth.js';
import Login from './components/auth/login.js';

const EditLink = props => {
  return (
    <Auth capability="update">
      <span>Edit</span>
    </Auth>
  );
};

const DeleteLink = props => {
  return (
    <Auth capability="delete">
      <span>Delete</span>
    </Auth>
  );
};

const App =(props)=> {

   
    return (
     <>
        <Login />
        <hr />
        <EditLink />
        <DeleteLink />
     </>
    );
  
}

export default App;

/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () =>{
  return(
    <nav>
      <h3><NavLink id="head" to="/" exact>Home</NavLink>{' | '}</h3> 
      <h3> <NavLink to="/courses" >Courses</NavLink>{' | '}</h3> 
      <h3><NavLink to="/about" exact>About</NavLink></h3>  
    </nav>
  );
};
export default Header;
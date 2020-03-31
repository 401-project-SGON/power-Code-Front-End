
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Nav, Navbar, Form, Button, FormControl, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { If, Then } from './../if'
import Signup from './../auth/signup.js'
import Login from './../auth/login.js';
import './pic.css'



const Pic = (props) => {

    return (
        <>

        
<div class="our-team-inner">
       <div class="our-team-head">
           <h1>.</h1>



           <div class="our-team-support-image">
               <div class="our-team-support-image-inner"></div>
               <div class="content-details fadeIn-top">
                   <h3>Support Team</h3>
                   <p>This is a short description</p>
               </div>
           </div>
           <div class="our-team-design-image">
               <div class="our-team-design-image-inner"></div>
               <div class="content-details fadeIn-top">
                   <h3>Designers</h3>
                   <p>This is a short description</p>
               </div>
           </div>
           <div class="our-team-developer-image">
               <div class="our-team-developer-image-inner"></div>
               <div class="content-details fadeIn-top">
                   <h3>Developers</h3>
                   <p>This is a short description</p>
               </div>
           </div>
       
       </div>
       
   </div>


        </>
    )

}

const mapStateToProps = state => ({
    reducer: state.reducer
});


export default connect(
    mapStateToProps
)(Pic);



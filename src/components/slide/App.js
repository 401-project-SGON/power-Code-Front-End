/* eslint-disable jsx-a11y/alt-text */
//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import Slideshow from "./Slideshow";
import slide1 from "../../img/slide1.png";
import slide2 from "../../img/slide2.jpg";
import slide3 from "../../img/slide3.jpg";
import slide4 from "../../img/slide4.jpg";
import slide5 from "../../img/slide5.jpg";
import slide6 from "../../img/slide6.jpeg";


//===========================================
// CREATE STYLES OBJECT
//===========================================
const s = {
    container: "screenW screenH dGray col",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter"
};

//===========================================
// SLIDES DATA
//===========================================
const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

//===========================================
// Slide COMPONENT
//===========================================
class Slide extends Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.header}>
     
                </div>
                <div className={s.main}>
                    <Slideshow slides={slides} style={{ position: 'relative', zIndex: '1' }} />
                           {/* <img className={s.sohad } src={require('../../img/powerLogo.png')} /> */}
                           <nav style={{ position: 'relative', zIndex: '2' } }>
                        <NavLink to="/" exact>Home</NavLink>{' |     '}

                        <NavLink to="/about" exact>About</NavLink>{' | '}

                        <NavLink to="/contactUs" >Contact Us</NavLink>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Slide;
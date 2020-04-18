import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { NavLink, Router, Route } from "react-router-dom";
import { If, Then } from '../if'
import './main.css'
import Part1 from '../part1/part1.js'
import HomeCourse from '../courseHome/course.js'
import AboutPower from '../aboutPower/about.js'
import Team from '../team/team.js'
// import Pic from '../pic/pic.js'
import Home from '../home/home.js'

const Main = () => {

  return (
    <section className='main'>


      <Part1 />
      <Home />
      {/* <AboutPower /> */}
      <HomeCourse />
      <Team />



    </section>

  )
}



export default Main
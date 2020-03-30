import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { NavLink, Router, Route } from "react-router-dom";
import { If, Then } from '../if'
import Part1 from '../part1/part1.js'
import HomeCourse from '../courseHome/course.js'
import AboutPower from '../aboutPower/about.js'
import Team from '../team/team.js'

// import ContactEmail from '../emailContact/email.js'

const Main = () => {

  return (
    <>
      <Part1 />
      <HomeCourse />
      <AboutPower />
      <Team />

    </>
  )
}



export default Main
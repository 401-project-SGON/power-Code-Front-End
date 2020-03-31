import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Nav, Navbar, Form, Button, FormControl, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'

import './course.css';



const HomeCourse = (props) => {

    return (
        <>


            <section class="our-team-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="our-team">
                                <div class="pic">
                                    <img src="https://www.coursekaro.in/wp-content/uploads/2019/10/ck-javascript.png" />
                                </div>
                                <div class="team-content">
                                    <h3 class="title">JS</h3>
                                </div>
                                <ul class="social">
                                    <li></li>

                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="our-team">
                                <div class="pic">
                                    <img src="https://pluralsight.imgix.net/paths/path-icons/css-c9b214f0d7.png" />
                                </div>
                                <div class="team-content">
                                    <h3 class="title">CSS</h3>
                                </div>
                                <ul class="social">
                                    <li></li>

                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="our-team">
                                <div class="pic">
                                    <img src="https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png" />
                                </div>
                                <div class="team-content">
                                    <h3 class="title">HTML</h3>
                                </div>
                                <ul class="social">
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



        </>
    )

}

const mapStateToProps = state => ({
    reducer: state.reducer
});


export default connect(
    mapStateToProps
)(HomeCourse);
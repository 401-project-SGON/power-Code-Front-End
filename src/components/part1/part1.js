/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
import React from 'react'
import { connect } from 'react-redux'
import './part1.css'




const Part1 = (props) => {

    return (
        <>

            <div id="slider">
                <div class="slides">
                    <div class="slider">
                        <div class="legend"></div>
                        <div class="content">
                            <div class="content-txt">
                                <h1>POWER CODE ACADEMY</h1>
                                <h2> Best Way To Learn</h2>
                            </div>
                        </div>
                        <div class="image">
                            <img src='https://hackernoon.com/hn-images/1*Kr2Kv6_XV8VNYa14m-qSxw.jpeg' />

                        </div>
                    </div>
                    <div class="slider">
                        <div class="legend"></div>
                        <div class="content">
                            <div class="content-txt">
                                <h1>CODE LANGUAGE</h1>
                                <h2> BEST WAY TO LEARN CODE LANGUAGE</h2>
                            </div>
                        </div>
                        <div class="image">
                            <img src='https://www.studying-in-uk.org/wp-content/uploads/2018/06/computer-science-e1528443542357-696x299.jpg' />

                        </div>
                    </div>
                    <div class="slider">
                        <div class="legend"></div>
                        <div class="content">
                            <div class="content-txt">
                                <h1></h1>
                                <h2> </h2>
                            </div>
                        </div>
                        <div class="image">
                            <img src='https://emps.exeter.ac.uk/media/universityofexeter/emps/computer-science/responsive/Computer_labs_930.jpg' />

                        </div>
                    </div>
                    <div class="slider">
                        <div class="legend"></div>
                        <div class="content">
                            <div class="content-txt">
                                <h1>Lorem ipsum dolor</h1>
                                <h2>Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</h2>
                            </div>
                        </div>
                        <div class="image">
                            <img src='https://www.brainscape.com/blog/wp-content/uploads/2012/04/online-college-study-obstacles.jpg' />

                        </div>
                    </div>
                </div>
                <div class="switch">
                    <ul>
                        <li>
                            <div class="on"></div>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
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
)(Part1);



///////////////////////////////////////////////////////////////////////////////////////





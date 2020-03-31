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
                                <h2> </h2>
                            </div>
                        </div>
                        <div class="image">
                            <img src='https://www.nar.realtor/sites/default/files/styles/main_stage_image/public/laptop-with-web-code-1300w-867h.jpg?itok=QZ4IosYc' />

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
                            <img src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />

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
                            <img src='https://images.ctfassets.net/cnu0m8re1exe/8mNFyn7Fn15xx8g3lygAp/99f4534bd491f7259fea75f36c67700b/shutterstock_618062045.jpg?w=650&h=433&fit=fill' />

                        </div>
                    </div>
                    <div class="slider">
                        <div class="legend"></div>
                        <div class="content">
                            <div class="content-txt">
                                <h1>Lorem ipsum dolor</h1>
                                <h2> JAVA SCRIPT  CSS  HTML</h2>
                            </div>
                        </div>
                        <div class="image">
                        <img src='https://www.equivityva.com/wp-content/uploads/2017/11/girl-typing-on-laptop-1200x675.jpg' />

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

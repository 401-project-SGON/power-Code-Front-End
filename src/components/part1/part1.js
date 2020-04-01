import React from 'react'
import { connect } from 'react-redux'
import './part1.css'
import  './000.jpeg'



const Part1 = (props) => {

    return (
        <>
            <div id="slider">
                <div class="slides">
                    <div class="slider">
                        <div class="legend"></div>
                        <div class="content">
                            <div class="content-txt">
                                <h1 className="h1">POWER CODE ACADEMY</h1>
                                <h2> YOUR WAY TO SUCCESS </h2>
                            </div>
                        </div>
                        <div class="image">
                            <img src='https://miro.medium.com/max/10116/1*VBAaUoOm0WRmAgxXVUwHIA.jpeg' />

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
                            <img src='https://blog.zoom.us/wordpress/wp-content/uploads/2020/03/zoom-for-education.jpg' />

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
                            <img src='https://blog.avast.com/hubfs/officedevicesGettyImages984117566.jpeg' />

                        </div>
                    </div>
                    <div class="slider">
                        <div class="legend"></div>
                        <div class="content">
                            <div class="content-txt">
                                <h1>Coding Is life</h1>
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

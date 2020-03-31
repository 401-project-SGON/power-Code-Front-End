import React from 'react'
import { connect } from 'react-redux'
import './about.css'


const AboutPower = (props) => {

    return (
        <>



            <div id="title" class="slide header">
                <h1>Power Code Academy</h1>
            </div>


            <div id="slide1" class="slide">
                <div class="title">
                    <h1>POWER CODE ACADEMY</h1>
                    <p>An interactive educational platform that allows users to learn different programming languages ​​and provides interactive platforms between users, in addition to providing various tests to entrench your programming concepts.</p>
                </div>
                <img class="title2" src="https://media0.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif" height='50' width='50' />
                <img class="title2" src="https://s3-us-west-2.amazonaws.com/robogarden-new/Articles/upload/blogs/lg-leverage-of-coding.jpg" height='50' width='50' />
            </div>


        </>
    )

}

const mapStateToProps = state => ({
    reducer: state.reducer
});


export default connect(
    mapStateToProps
)(AboutPower);









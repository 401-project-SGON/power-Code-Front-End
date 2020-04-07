
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { getUsers, getFeedback } from '../../store/actions.js'
import Users from './users.js'
import ManageCourse from './manageCourse.js'
import { Button } from 'react-bootstrap'
import { If, Then } from '../if'
import AddLevel from './addLevel.js'
import AddSubject from './addSubject.js'
import Feedback from './feedback.js'
import './adminTool.css'


const AdminTool = (props) => {

    const [showUsers, setShowUsers] = useState(false)
    const [showCourse, setShowCourse] = useState(true)
    const [showLevel, setShowLevel] = useState(false)
    const [showSub, setShowSub] = useState(false)
    const [showfeedback, setShowf] = useState(false)



    const showU = () => {
        if (showCourse) setShowCourse(false)
        if (showLevel) setShowLevel(false)
        if (showSub) setShowSub(false)
        if (showfeedback) setShowf(false)


        if (showUsers) setShowUsers(false)
        if (!showUsers) setShowUsers(true)
    }
    const showC = () => {
        if (showUsers) setShowUsers(false)
        if (showLevel) setShowLevel(false)
        if (showSub) setShowSub(false)
        if (showfeedback) setShowf(false)


        if (showCourse) setShowCourse(false)
        if (!showCourse) setShowCourse(true)
    }
    const showL = () => {
        if (showUsers) setShowUsers(false)
        if (showCourse) setShowCourse(false)
        if (showSub) setShowSub(false)
        if (showfeedback) setShowf(false)


        if (showLevel) setShowLevel(false)
        if (!showLevel) setShowLevel(true)
    }
    const showS = () => {
        if (showUsers) setShowUsers(false)
        if (showCourse) setShowCourse(false)
        if (showLevel) setShowLevel(false)
        if (showfeedback) setShowf(false)


        if (showSub) setShowSub(false)
        if (!showSub) setShowSub(true)
    }
    const showf = () => {
        if (showUsers) setShowUsers(false)
        if (showCourse) setShowCourse(false)
        if (showLevel) setShowLevel(false)
        if (showSub) setShowSub(false)


        if (showfeedback) setShowf(false)
        if (!showfeedback) setShowf(true)
    }

    return (
            <section className='adminTool'>
            <Button onClick={showU} variant="outline-dark">Show all users</Button>
            <Button onClick={showf} variant="outline-dark">Show all feedback</Button>

            <Button onClick={showC} variant="outline-dark">Add new course</Button>
            <Button onClick={showL} variant="outline-dark">Add new level</Button>
            <Button onClick={showS} variant="outline-dark">Add new subject</Button>

            <If condition={showUsers}>
                <Then><Users /></Then>

            </If>

            <If condition={showCourse}>
                <Then> <ManageCourse />
                </Then>

            </If>


            <If condition={showLevel}>
                <Then> <AddLevel />
                </Then>

            </If>



            <If condition={showSub}>
                <Then> <AddSubject />
                </Then>

            </If>
            <If condition={showfeedback}>
                <Then><Feedback/>

                </Then>

            </If>
            </section>

    )
}


const mapStateToProps = state => ({
    reducer: state.reducer
});


const mapDispatchToProps = { getUsers, getFeedback };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminTool);
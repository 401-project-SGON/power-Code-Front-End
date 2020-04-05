
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { getUsers, getFeedback } from '../../store/actions.js'
import Users from './users.js'
import ManageCourse from './manageCourse.js'
import { Button } from 'react-bootstrap'
import { If, Then } from '../if'
import AddLevel from './addLevel.js'
import AddSubject from './addSubject.js'





const AdminTool = (props) => {

    const [showUsers, setShowUsers] = useState(false)
    const [showCourse, setShowCourse] = useState(false)
    const [showLevel, setShowLevel] = useState(false)
    const [showSub, setShowSub] = useState(false)


    const showU = () => {
        if (showUsers) setShowUsers(false)
        if (!showUsers) setShowUsers(true)
    }
    const showC = () => {
        if (showCourse) setShowCourse(false)
        if (!showCourse) setShowCourse(true)
    }
    const showL = () => {
        if (showLevel) setShowLevel(false)
        if (!showLevel) setShowLevel(true)
    }
    const showS = () => {
        if (showSub) setShowSub(false)
        if (!showSub) setShowSub(true)
    }

    return (
        <>
            <Button onClick={showU} variant="outline-dark">show all users</Button>

            <If condition={showUsers}>
                <Then><Users /></Then>

            </If>
            <Button onClick={showC} variant="outline-dark">Add new course</Button>

            <If condition={showCourse}>
                <Then> <ManageCourse />
                </Then>

            </If>

            <Button onClick={showL} variant="outline-dark">Add new level</Button>

            <If condition={showLevel}>
                <Then> <AddLevel />
                </Then>

            </If>


            <Button onClick={showS} variant="outline-dark">Add new subject</Button>

            <If condition={showSub}>
                <Then> <AddSubject />
                </Then>

            </If>
        </>

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
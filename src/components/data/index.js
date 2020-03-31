import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getData, choose, levelsRendered ,selectSubject} from '../../store/actions.js'
import { NavLink } from "react-router-dom";
import { Then } from '../if'
import { Spinner,Button } from 'react-bootstrap'
import './data.css'





const If = props => {
    return props.condition ? props.children : null;
};


const Data = (props) => {

    const [selectCourse, setSelect] = useState('')
    const [overview, setoverview] = useState('')
    const [levels, setLevel] = useState([])
    const [subjects, setSubjects] = useState([])
    const [showOver, setShowOver] = useState(false)


    const chooseCourse = (course) => {
        props.choose(course)
        setShowOver(true)
        setSelect(course);
        setoverview(course.overview)
        setLevel(course.levels)
        console.log('levels : ', levels);
    }

    const choseLevel = (level) => {

        setSubjects(level.subjects)
        setShowOver(false)
        console.log('subjects : ', subjects);
    }

    console.log('selectCourse : ', selectCourse.levels);
    useEffect(() => {
        if (!props.reducer.renderd) { props.getData() }
    }, [])

    return (
        <section className='coursesN'>
           
            <If condition={props.reducer.courseRendering}>
                <Spinner animation="grow" />
                <Spinner animation="grow" />
                <Spinner animation="grow" />

            </If>
            <ul>
                {props.reducer.data.map(item => {
                    console.log('item : ', item);

                    return (
                        <section className='courseName'>
                        <Button type="button" onClick={() => chooseCourse(item)}  key={item._id} class="btn btn-outline-primary"> {item.courseName}</Button>
                        </section>
                        // <button className='courseName' onClick={() => chooseCourse(item)} key={item._id}>
                        //     {item.courseName}
                            
                        // </button>

                       
                    )

                })}

            </ul>
            <If condition={overview.length > 1}>
                <section className='overview'>
                    <h3>overview</h3>

                    <p>
                        {props.reducer.chosen.overview}
                    </p>
                    <img src='https://www.linkedin.com/media-proxy/ext?w=512&h=288&hash=S4CGRzcLjuBH7S9XSM3p8aoPbhs%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6plxVUzgUv5K_PrkC9q0RIUJDPBy-gXCWu-NKfYXDpfcXYZLOkoVsTcC0FmQwxeu-1QTapG43ma90'/>

                </section>

            </If>
            <If condition={selectCourse}>
                        <h3>Test yourself</h3>
            <NavLink to='/test'>{selectCourse.courseName}</NavLink>
            </If>

            <section className='levels'>

            <If condition={levels.length > 1}>
                <h3>Levels</h3>
                <ul>
                    {levels.map(item => {
                        return (
                            <li
                                onClick={() => choseLevel(item)} key={item._id}>
                                {item.levelName}
                            </li>
                        )
                    })}
                </ul>
            </If>
            </section>
                    
                <section className='lessons'>
            <If condition={!showOver && subjects.length > 1}>
                <h3>Lessons</h3>
                <ul>
                    {subjects.map(item => {
                        return (
                            <li onClick={()=>props.selectSubject(item)}
                                key={item._id}>
                                <NavLink to='/subject'>{item.subject}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </If>
            </section>


            


        </section>
    )


}

const mapStateToProps = state => ({
    reducer: state.reducer
});


const mapDispatchToProps = { getData, choose, levelsRendered,selectSubject };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Data);

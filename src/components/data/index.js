import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getData, choose, levelsRendered, selectSubject } from '../../store/actions.js'
import { NavLink } from "react-router-dom";
import { Then } from '../if'
import { Spinner } from 'react-bootstrap'
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
                {/* <Spinner animation="grow" /> */}

            </If>


            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* 
<input type="radio" name="nav" id="one" checked="checked"/>
<label for="one">HTML</label>



<input type="radio" name="nav" id="two"/>
<label for="two">CSS</label>



<input type="radio" name="nav" id="three"/>
<label for="three">HTML</label>




<article class="content one">

    overview
    test
    level

    <h3>html</h3>
    <p> </p>


</article>

<article class="content two">

        overview
    test
    level


    <h3></h3>
    <p> </p>
</article>

<article class="content three">

        overview
    test
    level

    <h3></h3>
    <p></p>


</article>
 */}






            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


            <ul>
                {props.reducer.data.map(item => {
                    console.log('item : ', item);

                    return (
                        <li onClick={() => chooseCourse(item)} key={item._id}>
                            {item.courseName}
                        </li>
                    )

                })}

            </ul>









            <If condition={overview.length > 1}>
                <section className='overview'>
                    <h3>overview</h3>

                    <p>
                        {overview}
                    </p>
                </section>

            </If>

            <If condition={selectCourse}>
                <h3>Test yourself</h3>
                <NavLink to='/test'>{selectCourse.courseName}</NavLink>
            </If>









            <If condition={levels.length > 1}>
                <h3>levels:</h3>
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







            <If condition={!showOver && subjects.length > 1}>
                <h3>subjects</h3>
                <ul>
                    {subjects.map(item => {
                        return (
                            <li onClick={() => props.selectSubject(item)}
                                key={item._id}>
                                <NavLink to='/subject'>{item.subject}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </If>





        </section>
    )


}

const mapStateToProps = state => ({
    reducer: state.reducer
});


const mapDispatchToProps = { getData, choose, levelsRendered, selectSubject };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Data);

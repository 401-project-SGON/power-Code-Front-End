import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getData, choose, levelsRendered, selectSubject } from '../../store/actions.js'
import { NavLink } from "react-router-dom";
import { Then } from '../if'
import { Spinner, Button } from 'react-bootstrap'
import './data.scss'
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
                            <If condition={item.courseName==='HTML'}>
                            <div className='imgb'>
                            <img  onClick={() => chooseCourse(item)} className='imgcourse' src="https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png" width='75' height='75'/>
                            <p className='imgp' key={item._id} > {item.courseName}</p>

                            </div>
                            </If>
                            <If condition={item.courseName==='JavaScript'}>
                            <div className='imgb'>
                            <img  onClick={() => chooseCourse(item)} className='imgcourse' src="https://www.coursekaro.in/wp-content/uploads/2019/10/ck-javascript.png" width='75' height='75'/>
                            <p className='imgp' key={item._id}> {item.courseName}</p>

                            </div>
                            </If>

                            <If condition={item.courseName==='CSS'}>
                            <div className='imgb'>
                            <img  onClick={() => chooseCourse(item)} className='imgcourse' src="https://coryrylan.com/assets/images/posts/types/css.svg" width='75' height='75'/>
                            <p className='imgp' key={item._id}> {item.courseName}</p>
                            </div>
                            </If>
                            

            

                        </section>
                        


                    )

                })}

            </ul>
            <section className='over-test'>
                <If condition={overview.length > 1}>
                    <section className='overview'>
                        <h3>overview</h3>

                        <p>
                            {props.reducer.chosen.overview}
                        </p>
                        <If condition={props.reducer.chosen.courseName === 'HTML'}>
                            <img src='https://www.linkedin.com/media-proxy/ext?w=512&h=288&hash=S4CGRzcLjuBH7S9XSM3p8aoPbhs%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6plxVUzgUv5K_PrkC9q0RIUJDPBy-gXCWu-NKfYXDpfcXYZLOkoVsTcC0FmQwxeu-1QTapG43ma90'
                                width='425' />
                        </If>
                        <If condition={props.reducer.chosen.courseName === 'CSS'}>
                            <img src='https://hackernoon.com/drafts/kq5m3yzf.png' width='425' />

                        </If><If condition={props.reducer.chosen.courseName === 'JavaScript'}>
                            <img src='https://cdn.lynda.com/course/417077/417077-637199562454668761-16x9.jpg'
                                width='425' />
                        </If>
                        <section className='test2'>
                            <If condition={selectCourse}>
                                <h3>Test yourself</h3>
                                <NavLink to='/test'>{selectCourse.courseName}</NavLink>
                            </If>
                        </section>
                    </section>

                </If>
            </section>



            


                        <If condition={levels.length > 1}>
                        <div class="row">
                <div class="col">
                    <div class="tabs">
                                {levels.map(item => {
                                    return (
                                        <div class="tab">
                                            <input type="radio" id={`rd${item._id}`} name="rd" />

                                            <label onClick={() => choseLevel(item)} key={item._id} class="tab-label" for={`rd${item._id}`}>
                                                {item.levelName}
                                            </label>
                                            {subjects.map(item => {
                                                return (
                                                    <div onClick={() => props.selectSubject(item)}
                                                        key={item._id} class="tab-content">
                                                        <NavLink to='/subject'>{item.subject}</NavLink>
                                                    </div>
                                                )
                                            })}

                                        </div>


                                    )
                                })}
                            

                            <div class="tab">
                            <input type="radio" id="rd3" name="rd" />
                            <label for="rd3" class="tab-close">Close level</label>
                        </div>
                                  
                    </div>
                </div>
            </div>

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


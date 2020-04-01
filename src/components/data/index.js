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
            <div className='spin'>
                <If condition={props.reducer.courseRendering}>
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />

                </If>
            </div>
            <div class="container" >
                {props.reducer.data.map(item => {
                    console.log('item : ', item);




                    return (

                        
<>

                            {/* // <section className='courseName'> */}
                                <If condition={item.courseName === 'HTML'}>

                                <div class="card">
                                 <img onClick={() => chooseCourse(item)} src="http://mapsfromscratch.com/wp-content/uploads/2019/09/html-languages.png"/>
                                 <div  class="card__head" key={item._id} > {item.courseName}</div>
                                  </div>
                                    {/* <div className='imgb'>
                                        <img onClick={() => chooseCourse(item)} className='imgcourse' src="https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png" width='75' height='75' />
                                        <p className='imgp' key={item._id} > {item.courseName}</p>

                                    </div> */}
                                </If>
                                <If condition={item.courseName === 'JavaScript'}>
                                <div class="card">
                                 <img onClick={() => chooseCourse(item)} src="https://entwickler.de/wp-content/uploads/2018/11/state-of-javascript-2018.jpg" />
                                 <div class="card__head" key={item._id} > {item.courseName}</div>
                                  </div>
                                </If>

                                <If condition={item.courseName === 'CSS'}>
                                <div class="card">
                                 <img onClick={() => chooseCourse(item)} src="https://www.tutorialrepublic.com/lib/images/css-illustration.png"/>
                                 <div  class="card__head" key={item._id} > {item.courseName}</div>
                                  </div>
                                </If>




                            {/* // </section> */}
</>

                    )

                })}

            </div>
                        <section className='over-test'>
                            <If condition={overview.length > 1}>
                                <section className='overview'>
                                    <h3 className="overh3">overview</h3>
                                    <p className="paragh">
                                        {props.reducer.chosen.overview}
                                    </p>
                                    <If condition={props.reducer.chosen.courseName === 'HTML'}>
                                        <iframe width="670" height='235' src="https://www.youtube.com/embed/u0OeZfIfBRI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </If>
                                    <If condition={props.reducer.chosen.courseName === 'CSS'}>
                                        <iframe width="670" height='235' src="https://www.youtube.com/embed/qAqP5y_eSB4?list=PUt8Sa48zWN_WcordE7TaUBg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </If><If condition={props.reducer.chosen.courseName === 'JavaScript'}>
                                        <iframe width="670" height='235' src="https://www.youtube.com/embed/OSWppEa2Zac" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </If>
                                    <section className='test2'>
                                        <If condition={selectCourse}>
                                            <h3 className="testy">Test yourself</h3>
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
                                                    <input className='tapinput' type="radio" id={`rd${item._id}`} name="rd" />

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
                                            <input className='tapinput' type="radio" id="rd3" name="rd" />
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


const mapDispatchToProps = { getData, choose, levelsRendered, selectSubject};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Data);


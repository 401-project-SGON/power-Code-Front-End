import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getData, choose, levelsRendered, selectSubject } from '../../store/actions.js'
import { NavLink } from "react-router-dom";
import { Then } from '../if'
import { Spinner, Button, Dropdown, FormControl } from 'react-bootstrap'
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
    const [vidurl,setvid] = useState('')



    const chooseCourse = (course) => {
        setvid(getId(course.video))
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

    const getId=(url)=> {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
    
        return (match && match[2].length === 11)
          ? match[2]
          : null;
    }
    
    // const videoId = getId('http://www.youtube.com/watch?v=zbYf5_S7oJo');
    // const iframeMarkup = '<iframe width="560" height="315" src="//www.youtube.com/embed/' 
    //     + videoId + '" frameborder="0" allowfullscreen></iframe>';
    

    return (
        <section className='coursesN'>
            <div className='spin'>
                <If condition={props.reducer.courseRendering}>
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />

                </If>
            </div>
            <div class="container-cards" >
                {props.reducer.data.map(item => {
                    console.log('item : ', item);




                    return (


                        <>

                            {/* // <section className='courseName'> */}

                                <div class="card">
                                    <img onClick={() => chooseCourse(item)} src={item.image} />
                                    <div class="card__head" key={item._id} > {item.courseName}</div>
                                </div>

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
                        
                        <iframe src={`https://www.youtube.com/embed/${vidurl}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        
                        {/* <If condition={props.reducer.chosen.courseName === 'CSS'}>
                            <iframe src="https://www.youtube.com/embed/qAqP5y_eSB4?list=PUt8Sa48zWN_WcordE7TaUBg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </If><If condition={props.reducer.chosen.courseName === 'JavaScript'}>
                            <iframe src="https://www.youtube.com/embed/OSWppEa2Zac" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </If> */}
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


const mapDispatchToProps = { getData, choose, levelsRendered, selectSubject };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Data);


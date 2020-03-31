// import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux'
// import { getData, choose, levelsRendered, selectSubject } from '../../store/actions.js'
// import { NavLink } from "react-router-dom";
// import { Then } from '../if'
// import { Spinner, Button } from 'react-bootstrap'
// import './data.css'
// import './data.scss'
// import { Player } from 'video-react';




// const If = props => {
//     return props.condition ? props.children : null;
// };


// const Data = (props) => {

//     const [selectCourse, setSelect] = useState('')
//     const [overview, setoverview] = useState('')
//     const [levels, setLevel] = useState([])
//     const [subjects, setSubjects] = useState([])
//     const [showOver, setShowOver] = useState(false)


//     const chooseCourse = (course) => {
//         props.choose(course)
//         setShowOver(true)
//         setSelect(course);
//         setoverview(course.overview)
//         setLevel(course.levels)
//         console.log('levels : ', levels);
//     }

//     const choseLevel = (level) => {

//         setSubjects(level.subjects)
//         setShowOver(false)
//         console.log('subjects : ', subjects);
//     }

//     console.log('selectCourse : ', selectCourse.levels);
//     useEffect(() => {
//         if (!props.reducer.renderd) { props.getData() }
//     }, [])

//     return (
//         <section className='coursesN'>

//             <If condition={props.reducer.courseRendering}>
//                 <Spinner animation="grow" />
//                 <Spinner animation="grow" />
//                 <Spinner animation="grow" />

//             </If>


//             {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

//             <ul>
//                 {props.reducer.data.map(item => {
//                     console.log('item : ', item);

//                     return (


//                         <div class="col-lg-3 col-md-6 col-sm-6">
//                             <div class="our-team">
//                                 <div class="pic">
//                                     <img src="https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png" />
//                                 </div>
//                                 <div class="team-content">
//                                     <Button type="button" onClick={() => chooseCourse(item)} key={item._id} > {item.courseName}</Button>
//                                 </div>
//                                 <ul class="social">
//                                     <li></li>
//                                 </ul>
//                             </div>
//                         </div>


//                     )

//                 })}

//             </ul>




//             <If condition={overview.length > 1}>





//                 <section className='container'>

//                     <button class="button b-blue"> overview</button>

//                     <article class="buttons border">
//                         <p>{props.reducer.chosen.overview}</p>
//                         {/* <img src='https://www.linkedin.com/media-proxy/ext?w=512&h=288&hash=S4CGRzcLjuBH7S9XSM3p8aoPbhs%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6plxVUzgUv5K_PrkC9q0RIUJDPBy-gXCWu-NKfYXDpfcXYZLOkoVsTcC0FmQwxeu-1QTapG43ma90' /> */}
//                         {/* <Player  playsInline ="/assets/poster.png" src="https://youtu.be/k0SMuHlmATs" /> */}
//                         <Player><source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" /></Player>







//                     </article>

//                 </section>

//             </If>










//             <div class="row">
//                 <div class="col">
//                     <div class="tabs">
//                         <div class="tab">





//                             <section className='levels'>
//                                 <If condition={levels.length > 1}>
//                                     {/* <h3>Levels</h3> */}


//                                     <input type="radio" id="rd1" name="rd" />
//                                     <ul>
//                                         {levels.map(item => {
//                                             return (
//                                                 <label class="tab-label" for="rd1"><li onClick={() => choseLevel(item)} key={item._id}>{item.levelName}</li></label>
//                                             )
//                                         })}
//                                     </ul>
//                                 </If>
//                             </section>







//                             <section className='lessons'>
//                                 <If condition={!showOver && subjects.length > 1}>
//                                     <h3>Lessons</h3>
//                                     <ul>
//                                         {subjects.map(item => {
//                                             return (
//                                                 <div class="tab-content"><li onClick={() => props.selectSubject(item)} key={item._id}><NavLink to='/subject'>{item.subject}</NavLink></li></div>
//                                             )
//                                         })}
//                                     </ul>
//                                 </If>
//                             </section>






//                         </div>












//                         <div class="tab">
//                             <input type="radio" id="rd3" name="rd" />
//                             <label for="rd3" class="tab-close">Close others &times;</label>
//                         </div>




//                     </div>
//                 </div>
//             </div>




//             <div class="row">
//                             <div class="col">
//                                 <h2>Open <b>one</b></h2>
//                                 <div class="tabs">
//                                     <div class="tab">
//                                         <input type="radio" id="rd1" name="rd" />
//                                         <label class="tab-label" for="rd1">Item 1</label>
//                                         <div class="tab-content">
//                                             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
//         </div>
//                                     </div>
//                                     <div class="tab">
//                                         <input type="radio" id="rd2" name="rd" />
//                                         <label class="tab-label" for="rd2">Item 2</label>
//                                         <div class="tab-content">
//                                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
//         </div>
//                                     </div>
//                                     <div class="tab">
//                                         <input type="radio" id="rd3" name="rd" />
//                                         <label for="rd3" class="tab-close">Close others &times;</label>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>





//             <If condition={selectCourse}>
//                 <h3>Test yourself</h3>
//                 <NavLink to='/test'>{selectCourse.courseName}</NavLink>
//             </If>







//         </section>
//     )


// }

// const mapStateToProps = state => ({
//     reducer: state.reducer
// });


// const mapDispatchToProps = { getData, choose, levelsRendered, selectSubject };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Data);

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getData, choose, levelsRendered } from '../../store/actions.js'
import {  NavLink } from "react-router-dom";
import { If, Then } from '../if'
import {Spinner} from 'react-bootstrap'
import './data.css'



const Data = (props) => {


    useEffect(() => {
        if (!props.reducer.renderd) { props.getData()}
    }, [])

    return (
        <section className='coursesN'>

            {/* <button onClick={() => !props.reducer.renderd&&props.getData()}>get courses</button> */}

            <If condition={props.reducer.courseRendering}>
                <Then>
                <Spinner animation="grow" />
                <Spinner animation="grow" />
                <Spinner animation="grow" />

                </Then>
            </If>

            <ul>
                {props.reducer.data.map(item => {
                    console.log('item : ', item);
                    
                    return (
                        <li onClick={() => props.choose(item.courseName)} key={item._id}>
                            {/* {item.courseName} */}
                            <NavLink to='/course'> {item.courseName}</NavLink>

                        </li>
                    )
                    
                })}
            </ul>


            {/* <If condition={props.reducer.chosen&&!props.reducer.levelsRendered}>
                <Then>
                   
                    <NavLink to='/course'> Show</NavLink>
                

                </Then>
            </If> */}


        </section>
    )


}

const mapStateToProps = state => ({
    reducer: state.reducer
});


const mapDispatchToProps = { getData, choose, levelsRendered };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Data);

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { If, Then } from '../if'
import { NavLink } from 'react-router-dom'
import Code from './../codeEditor/codeEditor.js'
import './index.css'


const Subject = (props) => {


    return (

        <section className='subject'>
            <h3>{props.reducer.selectedSubject.subject}</h3>

            <p>{props.reducer.selectedSubject.explain}</p>

            <code> {props.reducer.selectedSubject.example}</code>

            <Code code={props.reducer.selectedSubject.example}/>




        </section>
    )

}

const mapStateToProps = state => ({
    reducer: state.reducer
});


export default connect(
    mapStateToProps
)(Subject);

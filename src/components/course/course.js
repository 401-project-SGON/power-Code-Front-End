import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Code from './../codeEditor/codeEditor.js'
import {Button,Dropdown,FormControl} from 'react-bootstrap'
import './index.css'

const If = props => {
    return props.condition ? props.children : null;
};


const Subject = (props) => {

    const [show,setShow] = useState(true)

    const open = ()=>{
        if(show){setShow(false)}
        if(!show){setShow(true)}
        console.log('show : ', show);
    }
    return (

        <section className='subject'>
            <h3 className='title5'>{props.reducer.selectedSubject.subject}</h3>

            <p className='example'>{props.reducer.selectedSubject.explain}</p>
            <Button className='btnc' variant="outline-primary" onClick={open}> example </Button><br/>

            <If condition={show}>

            <section className='code'> <p className='code1'> {props.reducer.selectedSubject.example}</p></section>
            <section > <pre><Code code={props.reducer.selectedSubject.example}/></pre></section>

            </If>



        </section>
    )

}

const mapStateToProps = state => ({
    reducer: state.reducer
});


export default connect(
    mapStateToProps
)(Subject);

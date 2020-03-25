import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getData, choose, levelsRendered } from '../../store/actions.js'
import { Switch, Route, Link, NavLink } from "react-router-dom";
import { If, Then } from '../if'
import './data.css'
import Loader from 'react-loader-spinner'



const Data = (props) => {

    const [rend, setRend] = useState(false)

    useEffect(() => {
        if (!props.reducer.renderd) { props.getData().then(setRend(true)) }
        setRend(true)
    }, [])

    return (
        <section className='coursesN'>

            {/* <button onClick={() => !props.reducer.renderd&&props.getData()}>get courses</button> */}

            <If condition={!rend}>
                <Then>
                <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />


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

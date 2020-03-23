import React,{useEffect} from 'react';
import { connect } from 'react-redux'
import { getData ,choose,levelsRendered} from '../../store/actions.js'
import {Switch,Route,Link,NavLink} from "react-router-dom";
import {If,Then} from '../if'



const Data = (props) => {

    useEffect(()=>{
        props.getData()
    },[])

    return (
        <section>

            {/* <button onClick={() => !props.reducer.renderd&&props.getData()}>get courses</button> */}

            <ul>
                {props.reducer.data.map(item => {
                    console.log('item : ', item);
                    return (
                        <li onClick={()=>props.choose(item.courseName)} key={item._id}>
                            {item.courseName}
                        </li>
                    )
                })}
            </ul>

            <If condition={props.reducer.chosen&&!props.reducer.levelsRendered}>
                <Then>
                   
                    <NavLink to='/course'> Show</NavLink>
                

                </Then>
            </If>
            

        </section>
    )


}

const mapStateToProps = state => ({
    reducer: state.reducer
});


const mapDispatchToProps = { getData ,choose,levelsRendered };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Data);

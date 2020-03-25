import React from 'react'
import { connect } from 'react-redux'
import {If,Then} from '../if/index.js'

const UserInfo = (props) =>{


    console.log('props.reducer.user : ', props.reducer.user);

    return(
        <section className='userInfo'>
        <h2>my information</h2>
       

    <h5>name: {props.reducer.user.username}</h5>
    <h5>user id: {props.reducer.user.iat}</h5>

    
        
        </section>
    )
}




const mapStateToProps = state => ({
    reducer: state.reducer
});



export default connect(
    mapStateToProps
)(UserInfo);

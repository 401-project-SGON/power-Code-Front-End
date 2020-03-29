
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getUsers ,getFeedback} from '../../store/actions.js'
import { If, Then } from '../if'

const AdminTool  = (props) =>{

    useEffect(()=>{
        props.getUsers()
        props.getFeedback()
        console.log('props.reducer.users : ', props.reducer.users);

    },[])

    return(
        <section className='adminTool'>
            <h3>Usres Data</h3>
        <ul>
        {props.reducer.users.map(user => {
            return (
                
                <li key={user._id}>
                    {user.username} -  {user.role} - {user.email} - {user.phone}
                </li>
               
                
            )
        })}
    </ul>

        <h3> feedback from all users</h3>
    <ul>
        {props.reducer.feedback.map(item => {
            return (
                
                <li key={item._id}>
                   feedback: {item.feedback} , suggestion:  {item.suggestions}, user: {item.user} 
                </li>
               
                
            )
        })}
    </ul>
    </section>
    )
}









const mapStateToProps = state => ({
    reducer: state.reducer
});


const mapDispatchToProps = { getUsers,getFeedback };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminTool);
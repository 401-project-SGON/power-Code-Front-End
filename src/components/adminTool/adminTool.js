
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getUsers } from '../../store/actions.js'
import { If, Then } from '../if'

const AdminTool  = (props) =>{

    useEffect(()=>{
        props.getUsers()
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
    </section>
    )
}









const mapStateToProps = state => ({
    reducer: state.reducer
});


const mapDispatchToProps = { getUsers };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminTool);
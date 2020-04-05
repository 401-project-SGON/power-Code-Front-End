import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getUsers ,getFeedback} from '../../store/actions.js'
import { If, Then } from '../if'
import {Table, Spinner} from 'react-bootstrap'

const Users  = (props) =>{

    const [pendding, setPendding] = useState(false)

    
    useEffect(()=>{
        setPendding(true)
        props.getUsers().then(()=>{
            setPendding(false)
        })
        // props.getFeedback()
        console.log('props.reducer.users : ', props.reducer.users);

    },[])
    let i =0

    return(
        
        <section className='adminTool'>
            <If condition={pendding}>
                    <Then>
                        <Spinner animation="border" />
                    </Then>
                </If>

            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Username</th>
      <th>Role</th>
      <th>Email</th>
      <th>Phone number</th>

    </tr>
  </thead>
  <tbody>
    
    {props.reducer.users.map(user => {

            return (
                <tr>
               <td>{i++}</td>
               <td>{user.username}</td>
               <td>{user.role}</td>
               <td>{user.email}</td>
               <td>{user.phone}</td>
               </tr>
            )
        })}
    

    
  
  </tbody>
</Table>
   
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
)(Users);
import React, {  useState,useEffect } from "react";
import { connect } from "react-redux";
import { getFeedback } from "../../store/actions.js";
import { If, Then } from "../if";
import { Spinner,Table} from "react-bootstrap";


const Feedback = (props) =>{

    const [pendding, setPendding] = useState(false)

    
    useEffect(()=>{
        setPendding(true)
        props.getFeedback().then(()=>{
            setPendding(false)
        })
        console.log('props.reducer.users : ', props.reducer.feedback);

    },[])

    let i =0

    return(
        <section className='feedback'>
            <If condition={pendding}>
                    <Then>
                        <Spinner animation="border" />
                    </Then>
                </If>

            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Feedback</th>
      <th>Suggestion</th>
      <th>Username</th>

    </tr>
  </thead>
  <tbody>
    
    {props.reducer.feedback.map(Item => {

            return (
                <tr>
               <td>{i++}</td>
               <td>{Item.feedback}</td>
               <td>{Item.suggestions}</td>
               <td>{Item.user}</td>
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

const mapDispatchToProps = {  getFeedback };

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

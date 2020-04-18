import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import {Button} from 'react-bootstrap'
import './test.css'
const If = props => {
    return props.condition ? props.children : null;
};



const Test = (props)=>{

let [score,setScore] = useState(0)
let [answered,setAnswered] = useState([])
let [finish,setFinish] =useState(false)
let[index,setIndex] = useState(0)
let [show,setShow] = useState(true)
let data =props.reducer.chosen.questions


const select = (answer,truthy)=>{
if(answer.answer==truthy){setScore(score+1)}
console.log('answer : ',answer.answer );
if(index<data.length-1) setIndex(index+1)
else{setFinish(true);setShow(false)}
setAnswered([...answered,answer.question])
}
    return(
        <section className='test'>
        <h3>Test</h3>
        <p>
            answer with true and false
        </p>
        <ul className='q'>
            
                    <>
                    <If condition={show}>
                <li key={data[index].question}> {data[index].question}</li>
                <section className='b12'>
                <Button className='b1' variant="outline-success" onClick={()=>select(data[index],'true')}>true</Button>
                <Button className='b2' variant="outline-warning" onClick={()=>select(data[index],'false')}>false</Button>
                </section>
                </If>

                <If condition={finish}>
    <h3 className='con'>Congratulations you got '{score}' of {data.length}</h3>
                </If>
                </>
                
            
        </ul>
        </section>
    )

}


const mapStateToProps = state => ({
    reducer: state.reducer
});


// const mapDispatchToProps = { getData, choose, levelsRendered,selectSubject };

export default connect(
    mapStateToProps

)(Test);

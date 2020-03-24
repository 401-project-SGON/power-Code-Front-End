import React, { useEffect,useState } from 'react'
import { connect } from 'react-redux'
import {If,Then} from '../if'




const Course = (props) => {

let [questions,setQuestions] = useState([])
let [score,setScore] = useState(0)
let [answered,setAnswered] =useState([])
let [showScore,setShowScore] =useState(false)


    let loc
    if (props.reducer.chosen == 'javaScript') { loc = 0 }
    if (props.reducer.chosen == 'html') { loc = 1 }
    if (props.reducer.chosen == 'css') { loc = 2 }
 
const renderQuestion=(level)=>{

    setQuestions(level)
console.log('questions : ',questions );
}

const check = (answer,trueOrNot)=>{
    if(trueOrNot){setScore(score+1)}
    setAnswered([...answered,answer])
}

    return (

        <section className='course'>

        <section className='courses'>
            <h1>Courses:</h1>
            <h3>{props.reducer.chosen}</h3>

            <ul>
                {props.reducer.data[loc] && props.reducer.data[loc].levels.map(item => {
                    return (
                        <li onClick={() => { renderQuestion(item.questions) }} key={item.id}>
                            {item.levelName}
                        </li>
                    )
                })}
            </ul>
        </section>

        <section className='questions'>

                <ul>
                    {questions&&questions.map(item=>{
                        return(
                            <If condition={!answered.includes(item.answer)}>
                                <Then>
                            <li key={item}>
                                {item.question}  -- answer: {item.answer}
                                <button onClick={()=>check(item.answer,true)}>true</button>
                                <button onClick={()=>check(item.answer,false)}>false</button>

                            </li>
                            </Then></If>
                        )
                    })}
                </ul>
                <h3>Your Answered :"{answered.length}- question</h3>
                <button onClick={()=>{setShowScore(true)}}>Show my score</button>
                <If condition={showScore}><Then>
                <h3>Your Score is:"{score} / out of {answered.length}</h3>
                </Then></If>

        </section>



        </section>
    )

}

const mapStateToProps = state => ({
    reducer: state.reducer
});


export default connect(
    mapStateToProps
)(Course);

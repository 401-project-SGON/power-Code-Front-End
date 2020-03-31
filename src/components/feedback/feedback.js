import React ,{useState} from 'react'
import { connect } from 'react-redux'
import {sendFeedback} from './../../store/actions.js'
import {If,Then} from './../if/index.js'
import StarRatingComponent from 'react-star-rating-component';
import {Button} from 'react-bootstrap'

import './feedback.css'


const Feedback =(props)=>{


    const [feedback,setFeedback] = useState('')
    const [suggestions,setSuggestions] = useState('')
    const [rating,setRating] = useState(4)


    const handlechange = (e)=>{
        if(e.target.name==='feedback')setFeedback({[e.target.name]: e.target.value})
        if(e.target.name==='suggestions')setSuggestions({[e.target.name]: e.target.value})

    }
    const handlesubmit = (e)=>{
        e.preventDefault()
        console.log('feedback : ',feedback );
        console.log('suggestions : ', suggestions);
        let fd= {
            "feedback":feedback.feedback,
            "suggestions":suggestions.suggestions,
            "user":props.reducer.user.username
        }
        console.log('fd : ', fd);
        props.sendFeedback(fd)
    }

    const onStarClick=(nextValue, prevValue, name) =>{
        // this.setState({rating: nextValue});
        setRating(nextValue)
        console.log('rating : ', rating);
      }
    return(
        <>
        <section className='feedback_form'>
        <form className='feedbackform' onSubmit={handlesubmit}>
        
        <p>Feedback <img src='https://cdn1.iconfinder.com/data/icons/feedback-review/64/x-05-512.png' height='30' width='35' /></p>
                <textarea className='texta'  placeholder='Enter your feedback' onChange={handlechange}  name='feedback' required/>
            
                <textarea className='texta' placeholder='Enter your suggestions' onChange={handlechange}  name='suggestions'/>
            <div>
        {/* <h2>Rating Our App : {rating}</h2> */}
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />
      </div>
      <div className='submitbtn'>
      <Button  variant="outline-primary">Submit</Button>{' '}
      </div>
        </form>
        </section>

        


        <If condition={props.reducer.feedbacksent}>
            <Then>
                <h3>Thank you for your feedback</h3>
            </Then>
        </If>



        </>
        
    )
}
const mapStateToProps = state => ({
    reducer: state.reducer
  });
  
const mapDispatchToProps = { sendFeedback };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Feedback);


import React ,{useState} from 'react'
import { connect } from 'react-redux'
import {sendFeedback} from './../../store/actions.js'
import {If,Then} from './../if/index.js'
import StarRatingComponent from 'react-star-rating-component';



const Feedback =(props)=>{


    const [feedback,setFeedback] = useState('')
    const [suggestions,setSuggestions] = useState('')
    const [rating,setRating] = useState(1)


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
        <form onSubmit={handlesubmit}>
            <label> feedback
                <input onChange={handlechange} type='text' name='feedback' required/>
            </label>
            <label> suggestions
                <input onChange={handlechange} type='text' name='suggestions'/>
            </label>
            <div>
        <h2>Rating Our App : {rating}</h2>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />
      </div>
            <button>submit</button>
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


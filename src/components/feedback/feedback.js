import  React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions.js';

class Feedback extends React.Component{
 state={
   feedback : {
     title:'',
   },
 };

  handleChange = event =>{
    const feedback = {...this.state.feedback, title:event.target.value };
    this.setState({feedback});
  };

  handleSubmit = event =>{
    event.preventDefault();
    this.props.dispatch(actions.createFeedback(this.state.feedback));
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Add Feedback</h2>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.feedback.title}
        />
        <input type="submit" valua="save"/>
        {this.props.feedbacks.map(feedback =>(
          <div key= { feedback.title}>{feedback.title}</div>
        ) )}
      </form>
    );
  }
}

function mapStateToProps (state){
  return{
    feedbacks:state.feedbacks,
  };
}

export default connect(mapStateToProps)(Feedback);
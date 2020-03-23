import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as courseAction from '../../store/action/courseAction.js';

class CoursesPage extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      courses:{
        title:'',
      },
    };
  }

    handleChange = event =>{
      const course = { ...this.state.course, title:event.target.value};
      this.setState({course});
    }

    handleSubmi = event =>{
      event.preventDefult();
      this.props.dispatch(courseAction.createCourse(this.state.course));
    }

    render(){
      return (
        <form onSubmit={this.handleSubmit}>
          <h2>Courses</h2>
          <h3>Add Course</h3>
          <input type="text" onChange={this.handleChange} value={this.state.course.title}/>
          <input type="submit" value="save" />
        </form>
      );
    }
}

CoursesPage.propTypes = {
  dispatch:PropTypes.func.isRequired,
};

function mapStateToProps(state){
  return{
    courses:state.courses,
  };
}


export default connect(mapStateToProps)(CoursesPage);

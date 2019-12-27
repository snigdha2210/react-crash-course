import React from 'react';
import {TextInput} from './TextInput';

export class Forms extends React.Component {

  constructor() {
    super();
    this.state = {
      studentName: '',
      studentId: '',
      courseTitle: '',
      courseCode: ''
    }
    // bind methods
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // Stops reload
    event.preventDefault();

    // Saving the inputs into variables
    const {name, value} = event.target;
    
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <form>
          {/* STUDENT INFO */}
          <p>Student:</p>
          <input 
            value={this.state.studentName}// best practice: force use state as unique source
            type="text" 
            onChange={event => {this.handleChange(event)}}
            name="studentName"
            placeholder="Name"
          />

          <input 
            value={this.state.studentId}// best practice: force use state as unique source
            type="text" 
            onChange={this.handleChange}
            name="studentId"
            placeholder="ID"
          />

          <p>Course:</p>
          <input 
            value={this.state.courseTitle}// best practice: force use state as unique source
            type="text" 
            onChange={this.handleChange}
            name="courseTitle"
            placeholder="Course title"
          />
          {/* Tried to create another component to deal with the inputs. Works the same way */}
          <TextInput 
            itsState={this.state.courseCode}
            handleChange = {this.handleChange}
            name = "courseCode"
            placeholder = 'Course code'
          />
        </form>
        <div>
          <h3>Student</h3>
          <p>Name: {this.state.studentName}</p>
          <p>ID: {this.state.studentId}</p>
          <h3>Course:</h3>
          <p>Title: {this.state.courseTitle}</p>
          <p>Code: {this.state.courseCode}</p>
        </div>
      </div>
    );
  }
}
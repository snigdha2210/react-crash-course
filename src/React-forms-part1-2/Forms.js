import React from 'react';
import {TextInput} from './TextInput';

export class Forms extends React.Component {

  constructor() {
    super();
    this.state = {
      studentName: '',
      studentId: '',
      courseTitle: '',
      courseCode: '',

      // PART 2
      didStudentPassed: false,
      studentGender: '',
      studentGrade: null
      // 'Formik' is a lib of Forms in React
    }
    // bind methods
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // Stops reload
    event.preventDefault();

    // Saving the inputs into variables
    const {name, value, type, checked} = event.target;
    
    if (type === 'checkbox') {
      this.setState({
        didStudentPassed: checked
      })
    } else {
      this.setState({
        [name]: value
      })
    }
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

      {/* FORMS PART 2 
        Other useful form elements:

        <textarea /> element (in React is self-closing)
        <input type="checkbox" />
        <input type="radio" />
        <select> and <option> elements
      */}

      <textarea value={"Some default value"}/>
      <br />

      <label>
        <input 
          type="checkbox"
          name="didStudentPassed"
          checked={this.state.didStudentPassed}
          onChange={this.handleChange}
          /> Did student passed?
      </label>
      <br />

      <label>
        <input 
          type="radio" 
          name="studentGender"
          checked={this.state.gender === 'M'} 
          value='M'
          onChange={this.handleChange}
        />Male

        <input 
          type="radio" 
          name="studentGender"
          checked={this.state.gender === 'F'} 
          value='F'
          onChange={this.handleChange}
        />Female
      </label>
      <br />

      <label>Student Grade:</label>
      <select 
        value='A'
        name='studentGrade'
        onChange={this.handleChange}
        placeholder="Select the grade"
      >
        <option value='A' checked={this.state.studentGrade === 'A'}>A</option>
        <option value='B' checked={this.state.studentGrade === 'B'}>B</option>
        <option value='C' checked={this.state.studentGrade === 'C'}>C</option>
        <option value='D' checked={this.state.studentGrade === 'D'}>D</option>
        <option value='E' checked={this.state.studentGrade === 'E'}>E</option>
        <option value='F' checked={this.state.studentGrade === 'F'}>F</option>
      </select>

      <div>
          <h3>Student</h3>
          <p>Gender: {this.state.studentGender}</p>
          <p>Passed: {this.state.didStudentPassed ? 'Yes' : 'No'}</p>
          <h3>Course:</h3>
          <p>Student Grade: {this.state.studentGrade}</p>
        </div>
      </div>
    );
  }
}
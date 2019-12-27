import React from 'react';
/* 
 * To-Do App - PHASE 3
 *
 * AUTHOR: Thiago Jacinto @ 2019
 */
import './style.css';
import {Item} from './TodoItem';
import {tasksData} from './tasksDatabase.js'

// Transform 'TodoApp()' into a class component
export class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasksData
    }
    // NECESSARY `bind` TO USE '.setState()'
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  // Toggle Checkbox when change
  toggleCheckbox(id) {
    this.setState((prevState) => {
      // creates a new object, then maps it to find de equal 'id'
      let updatedTasks = prevState.tasks.map(task => {
        if (task.id === id){
          // Invert its value (true -> false -> true ...)
          task.completed = !task.completed;
        }
        return task;
      });
      // then update its value with the new object updated
      return {
        tasks: updatedTasks
      }
    });
    // console.log('changed', id); // Verify
    
  }
  
  getData() {
    const tasksComponent = this.state.tasks.map(item => {
      return (
        <li>
          <Item key={item.id} content={item.content} completed={item.completed} toggleCheckbox={this.toggleCheckbox} elementId={item.id}/>
        </li>
      )
    });
    return tasksComponent;
  }

  render() {
    return (
    <div>
      <ul>
        {this.getData()}
      </ul>
    </div>
    );
  }
}
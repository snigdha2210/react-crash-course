import React from 'react';
/* 
 * To-Do App - PHASE 3
 *
 * AUTHOR: Thiago Jacinto @ 2019
 */
import './style.css';
import {Item} from './TodoItem';
import {tasksData} from './tasksDatabase.js'

// export function TodoApp() {

//   // Dealing with tasksData
  // const tasksComponent = tasksData.map(item => {
  //   return (
  //     <li>
  //       <Item key={item.id} content={item.content} completed={item.completed}/>
  //     </li>
  //   )
  // });

//   return (
//     <div>
//       <ul>
//         {tasksComponent}
//       </ul>
//     </div>
//   );
// }

// Transform 'TodoApp()' into a class component
export class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasksData
    }
  }
  
  getData() {
    const tasksComponent = this.state.tasks.map(item => {
      return (
        <li>
          <Item key={item.id} content={item.content} completed={item.completed}/>
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
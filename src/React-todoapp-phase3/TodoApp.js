import React from 'react';
/* 
 * To-Do App - PHASE 3
 *
 * AUTHOR: Thiago Jacinto @ 2019
 */
import './style.css';
import {Item} from './TodoItem';
import {tasksData} from './tasksDatabase.js'

export function TodoApp() {

  // Dealing with tasksData
  const tasksComponent = tasksData.map(item => {
    return (
      <li>
        <Item key={item.id} content={item.content} completed={item.completed}/>
      </li>
    )
  });

  return (
    <div>
      <ul>
        {tasksComponent}
      </ul>
    </div>
  );
}
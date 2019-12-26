import React from 'react';
/* 
 * To-Do App - PHASE 2
 *
 * AUTHOR: Thiago Jacinto @ 2019
 */
import './style.css';
import {Item} from './TodoItem';

export function TodoApp() {
  return (
    <div>
      <ul>
        <li> <Item /> </li>
        <li> <Item /> </li>
        <li> <Item /> </li>
        <li> <Item /> </li>
      </ul>
    </div>
  );
}
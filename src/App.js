import React from 'react';
import logo from './logo.svg';
import './App.css';

// Multifile component dealing:
// import {MyInfo} from './React-multifile-components/Myinfo.js'
// Parent & child files
// import {MainApp} from './React-parent-child/MainApp';
// TodoApp Phase 1
// import {TodoApp} from './React-todoapp-phase1/TodoApp';
// Styling with classes
// import {MainApp} from './React-styling-with-classes/MainApp.js'
// JSX to Javascript
import {ConvertToJS} from './React-JSX-to-Javascript/JSX-to-JS'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="react spinning logo" />
        {/* INTERVENTION BEGIN */}

        {/* <MainApp /> */}
        <ConvertToJS />

        {/* INTERVENTION END */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

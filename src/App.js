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
// import {MainApp} from './React-styling-with-classes/MainApp.js';
// JSX to Javascript
// import {ConvertToJS} from './React-JSX-to-Javascript/JSX-to-JS';
// TodoApp Phase 2
// import {TodoApp} from './React-todoapp-phase2/TodoApp';
// Props in Peace
// import {ProductList} from './React-props-in-peace/ProductList';
// Props styling
// import {Comedy} from './React-props-styling/Comedy.js';
// Mapping components
// import {Comedy} from './React-mapping-components/Comedy';
// TodoApp Phase 3
// import {TodoApp} from './React-todoapp-phase3/TodoApp';
// Class-based first step
import {Test} from './React-classbased-component/ClassComponent.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="react spinning logo" />
        {/* INTERVENTION BEGIN */}

        {/* <MainApp /> */}
        <Test />

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

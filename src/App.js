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
// import {Test} from './React-classbased-component/ClassComponent.js';
// State 1st practice
// import {StatePractice} from './React-state-practice/StatePractice.js';
// State 2nd practice
// import {Practice2} from './React-state-practice/StatePractice2';
// TodoApp Phase 4
// import {TodoApp} from './React-todoapp-phase4/TodoApp';
// TodoApp Phase 5
// import {TodoApp} from './React-todoapp-phase5-6/TodoApp';
// Conditional rendering part 1 & 2
// import {LoadingPage} from './React-conditional-rendering-part1/Main';
// Conditional rendering practice
// import {LogonVerify} from './React-conditional-rendering-practice/Practice';
// TodoApp Phase 7
// import {TodoApp} from './React-todoapp-phase7/TodoApp';
// Fetching data from an API
// import {Fetching} from './React-fetching-data-API/FetchingData';
// Forms parts 1 & 2
// import {Forms} from './React-forms-part1-2/Forms.js';
// Forms practice
// import {TravelForm} from './React-forms-practice/FormsPractice';
// Meme generator project
// import {Main} from './React-meme-generator-project/index';
// Hooks: useState() Part 1 & 2:
// import {HooksPart2} from './React-hooks-useState-parts1&2/HooksUseStatePart2';
// import {HooksPart1} from './React-hooks-useState-parts1&2/HooksUseStatePart1';
// Hooks: useEffect() Parts 1 & 2:
// import {HooksUseEffectPart1} from './React-hooks-useEffect-parts1&2/Hooks-useEffect';

// HOOKS ONE HOUR COURSE
// Hooks useState()
// import {PaintApp} from './Hooks/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="react spinning logo" />
        {/* INTERVENTION BEGIN */}

        {/* PUT HERE THE IMPORTED COMPONENT */}
        {/* <PaintApp /> */}
        <p>This might work. Welcome!</p>

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

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import { PaintApp } from './Hooks/index';
// import * as serviceWorker from './serviceWorker';
import {MainApp} from './Hooks-rocketseat/MainApp';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<PaintApp />, document.getElementById('root'));
ReactDOM.render(
  <MainApp />,
  document.getElementById('root')
); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

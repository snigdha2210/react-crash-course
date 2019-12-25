import React from 'react';
import ReactDOM from 'react-dom';

// Get the component from another file:
import { MyInfo } from "./Myinfo.js";

ReactDOM.render(
  <MyInfo />,
  document.getElementById('root')
);
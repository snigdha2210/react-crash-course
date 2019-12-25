import React from "react"
import ReactDOM from "react-dom"

// This is JSX
// 1) Direct at 'render()'

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
  </div>,
  // document.querySelector("main")
  document.getElementById("main")
);
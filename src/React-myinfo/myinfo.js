import React from 'react';
import ReactDOM from 'React-DOM';

// Functional component
function MyInfo() {
  return (
    <div>
      <h1>Thiago Jacinto @ 2019</h1>
      <p>This is me. Hungry for learn React right after christmas.</p>
      <ul>These are my TOP 3 vacation spots:
        <li>Roma, Italy</li>
        <li>Tokyo, Japan</li>
        <li>Varanasi, India</li>
      </ul>
    </div>
  );
}
// Rendering that component
ReactDOM.render(
  <MyInfo />,
  document.getElementById('root')
);
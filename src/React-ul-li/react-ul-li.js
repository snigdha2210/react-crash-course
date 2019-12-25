import React from 'react'
import ReactDOM from 'ReactDOM'

// As a function
function MyList() {
  return (
    // Here goes the HTML tags
    <div>
      <ul>
        <li>1st</li>
        <li>2nd</li>
        <li>3th</li>
      </ul>
    </div>
  );
}
// Then, render this
ReactDOM.render(
  <MyList />,
  document.getElementById('root')
);
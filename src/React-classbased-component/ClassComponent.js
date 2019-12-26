import React from 'react';

// export function Test() {
//   return (
//     <div>

//     </div>
//   );
// }

// Class-based component
export class Test extends React.Component {
  
  // Create your own methods
  double(num) {
    return num * 2;
  }
  
  // Render method
  render() {

    return (
      <div>
        <h1>Double</h1>
        <p>Calculate the double of: 2</p>
        <span>{this.double(2)}</span>
      </div>
    )
  }
}

export default Test;
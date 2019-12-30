import React, { useState } from 'react';

// USING useState
export function HooksPart1() {

  const [ answer ] = useState("Yes")

  return (

    <div>
        <h3>Is state important to know?</h3>
        <h1>{answer}</h1>
    </div>
  );
}

// export default class HooksPart1 extends Component {

//   constructor() {
//     super();
//     this.state = {
//       answer: "Yes",
//     }
//   }

//   render() {
//     return (
      // <div>
      //   <h3>Is state important to know?</h3>
      //   <h1>{this.state.answer}</h1>
      // </div>
//     );
//   }
// }

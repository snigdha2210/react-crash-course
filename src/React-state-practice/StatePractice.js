import React from "react";

export class StatePractice extends React.Component {
  // constructor to use 'state':
  constructor() {
    super();
    this.state = {
      age: 30,
      name: "Thiago J."
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} y.o.</h3>
      </div>
    )
  }
}

export default StatePractice;
import React from 'react';

import {Conditional} from './Conditional';

export class LoadingPage extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    // create a 'setInterval' to simulate fetching data timing:
    setInterval(() => {
      this.setState({
        // invert its value
        // isLoading: !this.state.isLoading
        isLoading: false
      })
    }, 2000);
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? <h1>Loading...</h1> : <Conditional />}
      </div>
    )
  }
}

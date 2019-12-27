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
        {/* PART 1 Solution 
              Want to SHOW 'loading...' then, display 'Conditional'
        */}
        {/* {this.state.isLoading ? <h1>Loading...</h1> : <Conditional />} */}
        {/* PART 2 Solution 
              Uses `&&` to achieve the same result. Common 
        */}
        {
          this.state.isLoading && <h1>Loading...</h1>
        }
        {
          !this.state.isLoading && <Conditional />
        }
      </div>
    )
  }
}

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {} // Empty state
  }

  // THESE ARE THE METHODS

  // PART 1
  componentDidMount() {
    // USUAL USE: 
    // 
    // GET data from server, to work with it
    // runs only once.
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return TRUE if is necessary to update
    // of FALSE if not.
  }

  componentWillUnmount() {
    // teardown or CLEAN UP your code befor your component disappears;
    // e.g. remove event listeners, etc...
  }

  // PART 2
  static getDerivedStateFromProps(props, state) {
    // return new & updated state based upon the props
    // puts 'props' inside 'state';
    // highly UNRECOMMENDED, even from ReactJS blog post
  }

  getSnapshotBeforeUpdate() {
    // create a backup of the current way things are
  }

  // DEPRECATED: componentWillMount(), componentWillReceiveProps(NextProps)

  render() {
    return (
      <div>
        <p>Code goes here</p>
      </div>
    );
  }

}

// Used just to clear warning
ReactDOM.render(
 <div>
   <App />
 </div>
)
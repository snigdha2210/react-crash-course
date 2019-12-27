import React from 'react';

export class LogonVerify extends React.Component {
  
  constructor() {
    super();
    this.state = {
      isLogged: false,
      connectionsCount: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLogged: !prevState.isLogged,
        connectionsCount: prevState.isLogged ? 
          prevState.connectionsCount + 1 : 
          prevState.connectionsCount
      }
    })
  }


  render() {

    return (
      <div>
        <h1>
          {
            this.state.isLogged ? 'Logged In. Welcome!' : 'Logged of. Click to login.'
          }
        </h1>

        <h3>
          {this.state.isLogged && 'Times logged in: ' + this.state.connectionsCount}
        </h3>

        <button onClick={this.handleClick} style={{
          fontSize: 40,
          borderRadius: 10,
          marginBottom: "10vh"
          }}>
          {this.state.isLogged ? 'LogOut' : 'LogIn'}
        </button>
        
      </div>
    );
  }
}
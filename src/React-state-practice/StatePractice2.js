import React from 'react';

export class Practice2 extends React.Component {
  constructor() {
    super();
    this.state = {

      isLoggedIn: false,

      credentials: {
        user: 'Thiago',
        validId: 'c610673f-9334-44ef-a101-812f626294c3'
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <div>
            <h1>Welcome, {this.state.credentials.user}</h1>
            <span>User ID: {this.state.credentials.validId}</span>
          </div>
        ) : <h1>Need to Login first.</h1>}
        <p> You are currently logged: {this.state.isLoggedIn ? 'IN' : 'OUT'} </p>
        
      </div>
    );
  }
}

export default Practice2;
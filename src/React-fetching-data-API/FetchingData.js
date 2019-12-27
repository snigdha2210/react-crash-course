import React from 'react';

export class Fetching extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    }
  }

  componentDidMount() {
    // Sets loading to TRUE to display 'loading'
    this.setState({loading: true})

    // Get all pokemon of type 'FIRE'
    fetch('https://swapi.co/api/people/15/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          character: data,
          loading: false
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.loading ? <h1>Loading...</h1> : <h1>Name: {this.state.character.name} </h1> }
      </div>
    );
  }
}
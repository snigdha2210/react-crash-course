import React from 'react';


// Transforming into a Class
export class Item extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {

    // Apply a Style when task is completed
    const completedStyle = {
      fontSyle: "italic",
      color: '#ccc',
      textDecoration: 'line-through'
    }

    return (

      <div key = {this.props.elementId} style={{display: !this.props.content && 'none'}}>
        <input 
          type="checkbox" 
          checked={this.props.completed}
          onChange={() => this.props.toggleCheckbox(this.props.elementId)}
        />
        <p style={this.props.completed ? completedStyle : null}>{this.props.content}</p>
      </div>
    ); 
  }
}
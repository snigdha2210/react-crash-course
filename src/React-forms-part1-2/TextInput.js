import React from 'react';

export class TextInput extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <input 
        value={this.props.itsState}// best practice: force use state as unique source
        type="text" 
        onChange={this.props.handleChange}
        name={this.props.name}
        placeholder={this.props.placeholder}
      />
    );
  }
}
import React from 'react';

// export function Item(props) {
//   return (
//     <div style={{display: !props.content & 'none'}}>
//       <input type="checkbox" checked={props.completed} onChange={} />
//       <p>{props.content}</p>
//     </div>
//   ); 
// }

// Transforming into a Class
export class Item extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div key = {this.props.elementId} style={{display: !this.props.content && 'none'}}>
        <input 
          type="checkbox" 
          checked={this.props.completed}
          onChange={() => this.props.toggleCheckbox(this.props.elementId)}
        />
        <p >{this.props.content}</p>
      </div>
    ); 
  }
}
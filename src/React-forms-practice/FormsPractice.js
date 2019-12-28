import React from 'react';

export class TravelForm extends React.Component {

  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      travelDestination: "",
      dieteryRestrictions: {
        isVegetarian: false,
        isKosher: false,
        isVegan: false,
        isLactoseFree: false,
      }
    }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    const {name, value, type, checked} = event.target;

    if (type === "checkbox") {
      // Nested element 'dietery restrictions' dealing
      this.setState(prevState => ({
          ...prevState,
          dieteryRestrictions: {
            ...prevState.dieteryRestrictions,
            [name]: checked
          }
        })
      ) 
    } else {
      this.setState({ [name]: value })
    } 
      
  }
  
  _handleSubmit(event) {
    alert("Request has been made. Congratulations!");
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Paradise Arlines</h1>
        <h3>Welcome! Select the options for your next travel</h3>

        <form onSubmit={this._handleSubmit}>

          <div className="name">
          <label>First name: </label>
          <textarea 
            placeholder="First name"
            name="firstName"
            value={this.state.firstName}
            onChange={event => {this._handleChange(event)}}
            />
          <label>Last name: </label>
          <textarea 
            placeholder="Last name"
            name="lastName"
            value={this.state.lastName}
            onChange={event => {this._handleChange(event)}}
            />
          </div>
          <br />
          <div className="travelerExtraIDs">
            <label>Age: </label>
            <input 
              name="age"
              type="text"
              value={this.state.age}
              placeholder="Age"
              onChange={event => {this._handleChange(event)}}
              /> 
            <label>Gender: </label>
            <input 
              name="gender"
              type="radio"
              checked={this.state.gender === "F"}
              value="F"
              onChange={event => {this._handleChange(event)}}
              /> Female
            <input 
              name="gender"
              type="radio"
              checked={this.state.gender === "M"}
              value="M"
              onChange={event => {this._handleChange(event)}}
              /> Male
          </div>

          <div className="travelDetails">
            <label>Select destination</label>
            <select
              name="travelDestination"
              placeholder="Select destination"
              value={this.state.travelDestination}
              onChange={event => this._handleChange(event)}
            >
              <option value=""> - - Please select an option - - </option>
              <option value="João Pessoa">João Pessoa, PB - Brasil</option>
              <option value="Natal">Natal, RN - Brasil</option>
              <option value="Jericoacoara">Jericoacoara, CE - Brasil</option>

            </select>
          </div>

          <div className="restrictions">
            <label>Mark the boxes to sinalize restrictions: </label>
            <p>Vegeratarian</p><input 
              type="checkbox"
              name="isVegetarian"
              checked = {this.state.dieteryRestrictions.isVegetarian}
              value = {this.state.dieteryRestrictions.isVegetarian}
              onChange = {event => this._handleChange(event)}
            />
            <p>Vegan</p><input 
              type="checkbox"
              name="isVegan"
              checked = {this.state.dieteryRestrictions.isVegan}
              value = {this.state.dieteryRestrictions.isVegan}
              onChange = {event => this._handleChange(event)}
            />
            <p>Kosher</p><input 
              type="checkbox"
              name="isKosher"
              checked = {this.state.dieteryRestrictions.isKosher}
              value = {this.state.dieteryRestrictions.isKosher}
              onChange = {event => this._handleChange(event)}
            />
            <p>Lactose free</p><input 
              type="checkbox"
              name="isLactoseFree"
              checked = {this.state.dieteryRestrictions.isLactoseFree}
              value = {this.state.dieteryRestrictions.isLactoseFre}
              onChange = {event => this._handleChange(event)}
            />
          </div>

          <button>Search travel packages!</button>
        </form>

        <div className="confirmation">
          <h3>Confirm this informatino ?</h3>
          <p>First name: {this.state.firstName} </p>
          <p>Last name: {this.state.lastName} </p>
          <p>Age: {this.state.age} </p>
          <p>Gender: {this.state.gender} </p>
          <p>Destination: {this.state.travelDestination} </p>
          <table>
            <thead>
              <th>Restriction</th>
              <th>Your case</th>
            </thead>
            <tr>
              <td>Vegetarian</td>
              <td>{this.state.dieteryRestrictions.isVegetarian ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td>Vegan</td>
              <td>{this.state.dieteryRestrictions.isVegan ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td>Kosher</td>
              <td>{this.state.dieteryRestrictions.isKosher ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td>Lactose free</td>
              <td>{this.state.dieteryRestrictions.isLactoseFree ? "Yes" : "No"}</td>
            </tr>
          </table>

        </div>
      </div>
    );
  }
        
}

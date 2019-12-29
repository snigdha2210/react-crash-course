import React, { Component } from 'react';

import {Loader} from './Loader';

export class MemeGenerator extends Component {

  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",

      loadMemes: {
        loading: false,
        allMemes: []
      }
    }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount() {
    // configure loading
    this.setState(prevState => ({
      ...prevState,
      loadMemes: {
        ...prevState.loadMemes,
        loading: true
      }
    }))

    // Get the memes array from Imgflip API:
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        // console.log(response.data);  // Verify
        this.setState(prevState => ({
          ...prevState,
          loadMemes: {
            ...prevState.loadMemes,
            loading: false,
            allMemes: response.data.memes
            }
          })
        )
      });
  }

  _selectMeme() {
    // Generates a random number between 0 and 99
    let randomNumber = Math.round(Math.random() * this.state.loadMemes.allMemes.length);

    // Returns the meme than index = randomNumber
    return (
      this.state.loadMemes.allMemes[randomNumber]
    );
  }
  
  _handleChange(event) {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    })
  }

  _handleSubmit(event) {
    event.preventDefault();
    const changedMeme = this._selectMeme().url;

    this.setState({
      randomImg: changedMeme
    })
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={event => this._handleSubmit(event)}>

          <input 
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={event => this._handleChange(event)}
          />
          <input 
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={event => this._handleChange(event)}
          />

          <button>Generate</button>
        </form>

        <div className="loader" style={{display: !this.state.loadMemes.loading && "none"}}>
        <Loader />
        </div>
        <div className="meme" style={{display: this.state.loadMemes.loading && "none"}}>
          <img 
            src={this.state.randomImg}
            alt="generated meme"
          />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react'
import './../styles/instructions.css'

class Instructions extends Component {
  render() {
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        {this.props.shouldDisplayImage ? (
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        ) : null}
        <ul>{this.getItems(this.props.items)}</ul>
      </div>
    )
  }

  getItems(items) {
    var jsx_arr = []
    return null
  }
}

export default Instructions

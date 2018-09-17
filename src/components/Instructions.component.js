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
        <ul>
          {this.props.items
            .filter(function(item) {
              return item.length >= 3
            })
            .map(function(item, index) {
              if (index % 2 === 1) {
                return <li>{item.toUpperCase()}</li>
              } else {
                return <li>{item}</li>
              }
            })}
        </ul>
      </div>
    )
  }
}

export default Instructions

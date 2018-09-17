import React, { Component } from 'react'

class InitialCountForm extends Component {
  constructor(props) {
    super(props)
    this.handleChange = props.handleChange
    this.submit_count = props.submit_count
  }

  render() {
    return (
      <div>
        <br />
        <input type="number" id="initial_count" onChange={this.handleChange} />
        <br />
        <button style={{ textAlign: 'center' }} onClick={this.submit_count}>
          Submit
        </button>
        <br />
      </div>
    )
  }
}

export default InitialCountForm

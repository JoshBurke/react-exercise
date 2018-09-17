import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.count
    }
    this.increment = () => {
      this.setState({
        count: this.state.count + 1
      })
    }

    this.decrement = () => {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) {
      this.setState({
        count: this.props.count
      })
    }
  }

  render() {
    return (
      <div className="container">
        <label>Count: {this.state.count}</label>
        <br />
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default Counter

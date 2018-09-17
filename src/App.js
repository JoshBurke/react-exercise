import React, { Component } from 'react'
import { Instructions, Counter, InitialCountForm } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialCount: 0,
      countInput: 0
    }
    this.submit_count = () => {
      this.setState({
        initialCount: this.state.countInput
      })
    }
    this.handleChange = event => {
      this.setState({
        countInput: event.currentTarget.value
      })
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayImage
          items={[
            'hello',
            'my',
            'name',
            'is',
            'joshua',
            'burke',
            'nice',
            'to',
            'meet',
            'you'
          ]}
        />

        <Counter count={this.state.initialCount} />

        <InitialCountForm
          handleChange={this.handleChange}
          submit_count={this.submit_count}
        />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import { Instructions, Counter } from './components'
import './styles/app.css'

class App extends Component {
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
        <Counter />
      </div>
    )
  }
}

export default App

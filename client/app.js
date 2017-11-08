import React, { Component } from 'react'
import ButtonAppBar from './app-bar'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = { view: 'Subscriptions' }
  }
  render() {
    return (
      <div>
        <ButtonAppBar title={ this.state.view } />
      </div>
    )
  }
}

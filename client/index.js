import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { HashRouter as Router } from 'react-router-dom'

injectTapEventPlugin()

ReactDOM.render(
  <Router basename='/'>
    <App />
  </Router>,
  document.querySelector('#app')
)

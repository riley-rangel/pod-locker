import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

ReactDOM.render(<App />, document.querySelector('#app'))

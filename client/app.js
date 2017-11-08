import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import ButtonAppBar from './app-bar'
import SubForm from './sub-form'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = { view: 'Subscriptions' }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    if (!formData.get('feed')) return
    const feed = { feed: formData.get('feed') }
    event.target.reset()
    this.subscribe(feed)
  }
  async subscribe(feed) {
    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(feed)
    }
    const res = await fetch('/subscribe', reqOptions)
    const sub = await res.json()
    console.log(sub)
  }
  render() {
    return (
      <Grid container>
        <Grid item xs={ 12 }>
          <ButtonAppBar title={ this.state.view } />
        </Grid>
        <Grid item xs={ 12 }>
          <SubForm handleSumbit={ this.handleSubmit }/>
        </Grid>
      </Grid>
    )
  }
}

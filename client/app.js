import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import ButtonAppBar from './app-bar'
import SubForm from './sub-form'
import SubList from './sub-list'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'Subscriptions',
      subs: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    if (!formData.get('feed')) return
    const feed = { feed: formData.get('feed') }
    event.target.reset()
    this.subscribe(feed)
  }
  handleClick({ target }) {
    const $selected = target.closest('div[data-feed]')
    if (!$selected) return
    const feed = { feed: $selected.getAttribute('data-feed') }
    console.log(this.getEpisodes(feed))
  }
  async subscribe(feed) {
    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(feed)
    }
    const res = await fetch('/subscribe', reqOptions)
    const sub = await res.json()
    if (sub) {
      this.setState({
        subs: this.state.subs.concat(sub)
      })
    }
  }
  async getEpisodes(feed) {
    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(feed)
    }
    const res = await fetch('/episodes', reqOptions)
    const sub = await res.json()
    return sub
  }
  async componentDidMount() {
    const res = await fetch('/subscriptions')
    const subs = await res.json()
    this.setState({ subs })
  }
  render() {
    return (
      <Grid container>
        <Grid item xs={ 12 }>
          <ButtonAppBar title={ this.state.view } />
        </Grid>
        <Grid item xs={ 12 }>
          <SubForm handleSumbit={ this.handleSubmit } />
        </Grid>
        <Grid item xs={ 12 }>
          <SubList subs={ this.state.subs } handleClick={ this.handleClick }/>
        </Grid>
      </Grid>
    )
  }
}

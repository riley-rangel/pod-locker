import React, { Component } from 'react'
import ButtonAppBar from './app-bar'
import SubContainer from './sub-container'
import EpisodeContainer from './episode-container'
import { Route } from 'react-router-dom'
import Grid from 'material-ui/Grid'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'Subscriptions',
      eps: []
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick({ target }) {
    const $selected = target.closest('div[data-feed]')
    if (!$selected) return
    const feed = { feed: $selected.getAttribute('data-feed') }
    this.getEpisodes(feed)
  }
  async getEpisodes(feed) {
    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(feed)
    }
    const res = await fetch('/episodes', reqOptions)
    const eps = await res.json()
    this.setState({ eps })
  }
  render() {
    return (
      <div>
        <ButtonAppBar title={ this.state.view } />
        <Grid container justify='center'>
          <Grid item xs={ 12 } sm={ 10 } lg={ 8 } xl={ 6 }>
            <Route exact path='/' render={ props => <SubContainer { ...props } handleClick={ this.handleClick } /> } />
            <Route path='/eps' render={ props => <EpisodeContainer { ...props } eps={ this.state.eps } /> } />
          </Grid>
        </Grid>
      </div>
    )
  }
}

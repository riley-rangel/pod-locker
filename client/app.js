import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Grid from 'material-ui/Grid'
import ButtonAppBar from './app-bar'
import Subscription from './subscription/'
import Episode from './episode/'
import MediaPlayer from './media-player'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'Subscriptions',
      eps: [],
      playing: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleEpisodeClick = this.handleEpisodeClick.bind(this)
  }
  handleClick({ target }) {
    const $selected = target.closest('div[ data-feed ]')
    if (!$selected) return
    const feed = { feed: $selected.getAttribute('data-feed') }
    this.getEpisodes(feed)
  }
  handleEpisodeClick({ target }) {
    const $selected = target.closest('div[ data-url ]')
    if (!$selected) return
    const episode = $selected.getAttribute('data-url')
    if (episode === this.state.playing) return
    this.setState({ playing: episode })
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
        <MediaPlayer episode={ this.state.playing } />
        <Grid container justify='center'>
          <Grid item xs={ 12 } sm={ 10 } lg={ 8 } xl={ 6 }>
            <Route
              exact path='/'
              render={
                props =>
                  <Subscription { ...props } handleClick={ this.handleClick } />
              }
            />
            <Route
              path='/eps'
              render={
                props =>
                  <Episode { ...props } eps={ this.state.eps } handleClick={ this.handleEpisodeClick } />
              }
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

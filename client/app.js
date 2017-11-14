import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Grid from 'material-ui/Grid'
import ButtonAppBar from './app-bar'
import Subscription from './subscription/'
import Episode from './episode/'
import MediaContainer from './media-container'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'Subscriptions',
      eps: [],
      playing: {}
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
    const url = $selected.getAttribute('data-url')
    if (url === this.state.playing) return
    const episode = this.state.eps.episodes.find(episode => {
      return episode.audio.url === url
    })
    this.setState({
      playing: {
        url,
        image: this.state.eps.about.image,
        podcast: this.state.eps.about.title,
        title: episode.title
      }
    })
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
        <MediaContainer episode={ this.state.playing } />
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Grid from 'material-ui/Grid'
import ButtonAppBar from './app-bar'
import Subscription from './subscription/'
import Episode from './episode/'
import MediaPlayer from './player/'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'Subscriptions',
      episodes: [],
      playing: {}
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleEpisodeClick = this.handleEpisodeClick.bind(this)
    this.getEpisodes = this.getEpisodes.bind(this)
    this.clearEpisodes = this.clearEpisodes.bind(this)
  }
  handleClick({ target }) {
    const $selected = target.closest('div[ data-id ]')
    if (!$selected) return
    const id = $selected.getAttribute('data-id')
    this.getEpisodes(id)
  }
  handleEpisodeClick({ target }) {
    const $selected = target.closest('div[ data-url ]')
    if (!$selected) return
    const url = $selected.getAttribute('data-url')
    if (url === this.state.playing) return
    const episode = this.state.episodes.episodes.find(episode => {
      return episode.audio.url === url
    })
    this.setState({
      playing: {
        url,
        image: this.state.episodes.about.image,
        podcast: this.state.episodes.about.title,
        title: episode.title
      }
    })
  }
  async getEpisodes(id) {
    const response = await fetch('/episodes/' + id)
    const episodes = await response.json()
    this.setState({ episodes })
  }
  clearEpisodes() {
    this.setState({ episodes: [] })
  }
  render() {
    return (
      <div style={{ 'margin': '65px 0 150px' }}>
        <ButtonAppBar title={ this.state.view } />
        <Grid container justify='center'>
          <Grid item xs={ 12 } sm={ 10 } lg={ 8 } xl={ 6 }>
            <Route
              exact path='/'
              render={
                props => {
                  return (
                    <Subscription
                      { ...props }
                      handleClick={ this.handleClick }
                    />
                  )
                }
              }
            />
            <Route
              path='/episodes/:id'
              render={
                props => {
                  return (
                    <Episode
                      { ...props }
                      episodes={ this.state.episodes }
                      handleClick={ this.handleEpisodeClick }
                      getEpisodes={ this.getEpisodes }
                      clearEpisodes={ this.clearEpisodes }
                    />
                  )
                }
              }
            />
          </Grid>
        </Grid>
        <MediaPlayer episode={ this.state.playing } />
      </div>
    )
  }
}

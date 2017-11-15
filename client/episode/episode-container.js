import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import EpisodeList from './episode-list'
import EpisodeHeader from './episode-header'

export default class EpisodeContainer extends Component {
  async componentWillMount() {
    const id = this.props.match.params.id
    this.props.getEpisodes(id)
  }
  render() {
    const { about = [], episodes = [] } = this.props.episodes
    const handleClick = this.props.handleClick
    return (
      <Grid container>
        <Grid item xs={ 12 }>
          <EpisodeHeader podcast={ about } />
        </Grid>
        <Grid item xs={ 12 }>
          <EpisodeList episodes={ episodes } handleClick={ handleClick } />
        </Grid>
      </Grid>
    )
  }
}

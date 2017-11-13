import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import EpisodeList from './episode-list'
import EpisodeHeader from './episode-header'

export default class EpisodeContainer extends Component {
  render(props) {
    const { about = [] } = this.props.eps
    const { episodes = [] } = this.props.eps
    const handleClick = this.props.handleClick
    return (
      <Grid container>
        <Grid item xs={ 12 }>
          <EpisodeHeader podcast={ about } />
        </Grid>
        <Grid item xs={ 12 }>
          <EpisodeList eps={ episodes } handleClick={ handleClick } />
        </Grid>
      </Grid>
    )
  }
}

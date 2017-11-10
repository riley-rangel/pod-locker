import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import EpisodeList from './episode-list'

export default class EpisodeContainer extends Component {
  render(props) {
    return (
      <Grid container>
        <Grid item xs={ 12 }>
          <EpisodeList eps={ this.props.eps } />
        </Grid>
      </Grid>
    )
  }
}

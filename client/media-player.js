import React, { Component } from 'react'
import Grid from 'material-ui/Grid'

export default class MediaPlayer extends Component {
  render() {
    return (
      <Grid container justify='center'>
        <Grid item xs={ 12 }>
          <audio
            controls='controls'
            src={ this.props.episode }
            type='audio/mp3'
            autoPlay>
          </audio>
        </Grid>
      </Grid>
    )
  }
}

import React from 'react'
import Grid from 'material-ui/Grid'
import episodeItem from './episode-item'

export default function EpisodeList({ eps }) {
  return (
    <Grid container justify='center'>
      <Grid item xs={ 12 } md={ 6 }>
        { eps.map((episode, i) => episodeItem(episode, i)) }
      </Grid>
    </Grid>
  )
}

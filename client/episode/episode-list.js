import React from 'react'
import Grid from 'material-ui/Grid'
import episodeItem from './episode-item'

export default function EpisodeList({ episodes, handleClick }) {
  return (
    <Grid container justify='center' onClick={ handleClick }>
      <Grid item xs={ 12 }>
        { episodes.map((episode, i) => episodeItem(episode, i)) }
      </Grid>
    </Grid>
  )
}

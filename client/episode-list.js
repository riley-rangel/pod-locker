import React from 'react'
import Grid from 'material-ui/Grid'

export default function EpisodeList({ eps }) {
  return (
    <Grid container justify='center'>
      <Grid item xs={ 12 } md={ 6 }>
        { console.log(eps) }
      </Grid>
    </Grid>
  )
}

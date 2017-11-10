import React from 'react'
import Grid from 'material-ui/Grid'
import SubItem from './sub-item'

export default function SubsList({ subs, handleClick }) {
  return (
    <Grid container justify='center' onClick={ handleClick }>
      <Grid item xs={ 12 }>
        { subs.map((sub, i) => <SubItem sub={ sub } key={ i } />) }
      </Grid>
    </Grid>
  )
}

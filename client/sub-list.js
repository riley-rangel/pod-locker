import React from 'react'
import Grid from 'material-ui/Grid'
import subItem from './sub-item'

export default function SubsList({ subs }) {
  return (
    <Grid container justify='center'>
      <Grid item xs={ 12 } md={ 6 }>
        { subs.map((sub, i) => subItem(sub, i)) }
      </Grid>
    </Grid>
  )
}

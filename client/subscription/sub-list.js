import React from 'react'
import Grid from 'material-ui/Grid'
import SubItem from './sub-item'

export default function SubsList({ subscriptions, handleClick, unsubscribe }) {
  return (
    <Grid container justify='center' onClick={ handleClick }>
      <Grid item xs={ 12 }>
        { subscriptions.map((subscription, i) => {
          return <SubItem
            subscription={ subscription }
            unsubscribe={ unsubscribe }
            key={ i } />
        }) }
      </Grid>
    </Grid>
  )
}

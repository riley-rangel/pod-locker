import React from 'react'
import Grid from 'material-ui/Grid'
import List, { ListItem, ListItemText, ListItemAvatar } from 'material-ui/List'
import Card from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'

export default function SubsList({ subs }) {
  return (
    <Grid container justify='center'>
      <Grid item xs={ 12 } md={ 6 }>
        { subs.map((sub, i) => subItem(sub, i)) }
      </Grid>
    </Grid>
  )
}

function subItem(sub, i) {
  const { title, author, image } = sub.about
  return (
    <Grid container key={ i } justify='center'>
      <Grid item xs={ 10 } md={ 12 }>
        <Card>
          <List>
            <ListItem button>
              <ListItemAvatar>
                <Avatar alt='' src={ image } />
              </ListItemAvatar>
              <ListItemText
                primary={ title + ' · ' + author }
              />
            </ListItem>
          </List>
        </Card>
      </Grid>
    </Grid>
  )
}

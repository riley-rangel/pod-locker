import React from 'react'
import Grid from 'material-ui/Grid'
import List, { ListItem, ListItemText, ListItemAvatar } from 'material-ui/List'
import Card from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import { Link } from 'react-router-dom'

export default function subItem(sub, i) {
  const { title, author, image } = sub.about
  return (
    <Grid
      container
      key={ i }
      justify='center'
      data-feed={ sub.feed }
    >
      <Grid item xs={ 10 } md={ 12 }>
        <Link to='/eps'>
          <Card>
            <List>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt='' src={ image } />
                </ListItemAvatar>
                <ListItemText
                  primary={ title }
                  secondary={ author }
                />
              </ListItem>
            </List>
          </Card>
        </Link>
      </Grid>
    </Grid>
  )
}

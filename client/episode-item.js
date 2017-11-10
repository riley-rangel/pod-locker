import React from 'react'
import Grid from 'material-ui/Grid'
import Card from 'material-ui/Card'
import List, { ListItem, ListItemText } from 'material-ui/List'
import formatDate from './format-date'
import formatTime from './format-time'

export default function episodeItem({ title, pubDate, duration }, i) {
  return (
    <Grid container key={ i }>
      <Grid item xs={ 12 }>
        <Card>
          <List>
            <ListItem button>
              <Grid container>
                <Grid item xs={ 8 }>
                  <ListItemText primary={ title } />
                </Grid>
                <Grid item xs={ 4 }>
                  <Grid container>
                    <Grid item xs={ 6 }>
                      <ListItemText primary={ formatDate(pubDate) } />
                    </Grid>
                    <Grid item xs={ 6 }>
                      <ListItemText
                        primary={ formatTime(duration) }
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Card>
      </Grid>
    </Grid>
  )
}

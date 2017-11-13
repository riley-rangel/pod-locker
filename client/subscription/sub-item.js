import React from 'react'
import Grid from 'material-ui/Grid'
import List, { ListItem, ListItemText, ListItemAvatar } from 'material-ui/List'
import Card from 'material-ui/Card'
import CoverArtMain from './sub-cover-art'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

const styles = {
  links: {
    textDecoration: 'none'
  }
}

function SubItem({ classes, sub }) {
  const { title, author, image } = sub.about
  return (
    <Grid
      container
      justify='center'
      data-feed={ sub.feed }>
      <Grid item xs={ 12 }>
        <Link to='/eps' className={ classes.links }>
          <Card>
            <List>
              <ListItem button>
                <ListItemAvatar>
                  <CoverArtMain alt='' src={ image } />
                </ListItemAvatar>
                <ListItemText
                  primary={ title }
                  secondary={ author }/>
              </ListItem>
            </List>
          </Card>
        </Link>
      </Grid>
    </Grid>
  )
}

SubItem.propTypes = { classes: PropTypes.object.isRequired }

export default withStyles(styles)(SubItem)

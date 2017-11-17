import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemText, ListItemAvatar } from 'material-ui/List'
import Card from 'material-ui/Card'
import Grid from 'material-ui/Grid'
import Icon from 'material-ui/Icon'
import PropTypes from 'prop-types'
import CoverArt from './sub-cover-art'

const styles = {
  links: {
    textDecoration: 'none'
  },
  unsubscribe: {
    marginLeft: '1vw',
    color: '#fff',
    fontSize: '1rem',
    backgroundColor: '#616161',
    border: '3px solid #616161',
    borderRadius: '100%',
    cursor: 'pointer'
  }
}

function SubItem({ classes, subscription: { id, about }, unsubscribe }) {
  const { title, author, image } = about
  return (
    <Grid container justify='center' data-id={ id }>
      <Grid item xs={ 12 }>
        <Card>
          <List>
            <Grid container justify='center' alignItems='center'>
              <Grid item md={ 11 } xs={ 10 }>
                <Link to={ '/episodes/' + id } className={ classes.links }>
                  <ListItem button>
                    <ListItemAvatar>
                      <CoverArt alt='' src={ image } />
                    </ListItemAvatar>
                    <ListItemText primary={ title } secondary={ author } />
                  </ListItem>
                </Link>
              </Grid>
              <Grid item md={ 1 } xs={ 2 }>
                <Icon
                  className={ classes.unsubscribe }
                  onClick={ unsubscribe }>
                  { 'close' }
                </Icon>
              </Grid>
            </Grid>
          </List>
        </Card>
      </Grid>
    </Grid>
  )
}

SubItem.propTypes = { classes: PropTypes.object.isRequired }

export default withStyles(styles)(SubItem)

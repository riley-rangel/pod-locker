import React from 'react'
import Grid from 'material-ui/Grid'
import List, { ListItem, ListItemText, ListItemAvatar } from 'material-ui/List'
import Card from 'material-ui/Card'
import CoverArt from './sub-cover-art'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

const styles = {
  links: {
    textDecoration: 'none'
  }
}

function SubItem({ classes, subscription: { id, about } }) {
  const { title, author, image } = about
  return (
    <Grid
      container
      justify='center'
      data-id={ id }>
      <Grid item xs={ 12 }>
        <Link to={ '/episodes/' + id } className={ classes.links }>
          <Card>
            <List>
              <ListItem button>
                <ListItemAvatar>
                  <CoverArt alt='' src={ image } />
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

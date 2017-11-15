import React from 'react'
import Grid from 'material-ui/Grid'
import CoverArt from './episode-cover-art'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

const styles = {
  container: {
    marginTop: '2rem',
    marginBottom: '2rem'
  },
  links: {
    color: '#9e9e9e'
  }
}

function EpisodeHeader({ classes, podcast }) {
  const { description, image, link, owner, title } = podcast
  return (
    <Grid container justify='center' className={ classes.container }>
      <Grid item xs={ 10 } sm={ 12 }>
        <Grid container>
          <Grid item xs={ 12 } sm={ 12 } md={ 4 }>
            <Grid container justify='center'>
              <CoverArt alt={ 'test' } src={ image } />
            </Grid>
          </Grid>
          <Grid item xs={ 12 } sm={ 12 } md={ 8 }>
            <Grid container>
              <Grid item xs={ 12 }>
                <Typography type='display3'>
                  { title }
                </Typography>
              </Grid>
              <Grid item xs={ 12 }>
                <Typography type='subheading'>
                  { owner }
                </Typography>
              </Grid>
              <Grid item xs={ 12 }>
                <a href={ link } className={ classes.links }>
                  <Typography type='body1'>
                    { link }
                  </Typography>
                </a>
              </Grid>
              <Grid item xs={ 12 }>
                <Typography type='body1'>
                  { description }
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

EpisodeHeader.propTypes = { classes: PropTypes.object.isRequired }

export default withStyles(styles)(EpisodeHeader)

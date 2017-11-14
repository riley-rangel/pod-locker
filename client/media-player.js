import React from 'react'
import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'

const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    zIndex: 100,
    height: '130px',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
    boxShadow: '0 -3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
  },
  coverArt: {
    position: 'relative',
    top: '8px',
    left: '8px',
    margin: '0 auto',
    height: 'auto',
    width: '100px'
  },
  title: {
    marginTop: '7px',
    overflow: 'hidden'
  },
  controls: {
    fontSize: '3.5rem',
    color: '#616161',
    border: '2px solid #616161',
    borderRadius: '100%'
  },
  progessLeft: {
    display: 'inline-block',
    float: 'left',
    color: '#616161'
  },
  progressRight: {
    display: 'inline-block',
    float: 'right',
    color: '#616161'
  },
  left: {
    width: '400px'
  },
  middle: {
    marginTop: '15px',
    width: 'calc(100vw - 800px)'
  },
  right: {
    width: '400px'
  }
}

function MediaPlayer(props) {
  const { classes } = props
  const { episode: { image, podcast, title } } = props
  const { playing, updatePlaying } = props
  return (
    <Grid container justify='center'>
      <Grid item xs={ 12 } className={ classes.container }>
        <Grid container>
          <Grid item className={ classes.left }>
            <Grid container>
              <Grid item xs={ 4 }>
                <img alt='' src={ image } className={ classes.coverArt } />
              </Grid>
              <Grid item xs={ 8 }>
                <Grid container>
                  <Grid item xs={ 12 } className={ classes.title }>
                    <Typography type='body1'>{ title }</Typography>
                  </Grid>
                  <Grid item xs={ 12 }>
                    <Typography type='caption'>{ podcast }</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={ classes.middle }>
            <Grid container>
              <Grid item xs={ 12 }>
                <Grid container justify='center'>
                  <Icon onClick={ updatePlaying } className={ classes.controls }>
                    {
                      playing ? 'pause' : 'play_arrow'
                    }
                  </Icon>
                </Grid>
              </Grid>
              <Grid item xs={ 12 } className={ classes.progressBar }>
                <input
                  id='progress-bar'
                  type='range'
                  min={ 0 }
                  max={ 100 }
                  value={ 0 }
                />
                <Typography
                  className={ classes.progessLeft }>
                  { 0 }
                </Typography>
                <Typography
                  className={ classes.progressRight }>
                  { 100 }
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={ classes.right }>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

MediaPlayer.propTypes = { classes: PropTypes.object.isRequired }

export default withStyles(styles)(MediaPlayer)

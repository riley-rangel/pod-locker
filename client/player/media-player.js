import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import formatProgress from '../utilities/format-progress'

const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    zIndex: 100,
    height: '130px',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
    boxShadow: '0 -3px 6px rgba( 0, 0, 0, 0.16), 0 3px 6px rgba( 0, 0, 0, 0.23)'
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
    margin: '0 0.5rem',
    color: '#673ab7',
    border: '2px solid #673ab7',
    borderRadius: '100%'
  },
  play: {
    fontSize: '3.5rem'
  },
  skip: {
    fontSize: '2.5rem'
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
  const { duration, playing, progress, updatePlaying } = props
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
                <Grid container justify='center' alignItems='center'>
                  <Icon className={ ClassNames(classes.controls, classes.skip) }>
                    { 'replay_30' }
                  </Icon>
                  <Icon
                    onClick={ updatePlaying }
                    className={ ClassNames(classes.controls, classes.play) }>
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
                  max={ duration }
                  value={ progress }
                />
                <Typography
                  className={ classes.progessLeft }>
                  { formatProgress(progress) }
                </Typography>
                <Typography
                  className={ classes.progressRight }>
                  { formatProgress(duration) }
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

import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import formatProgress from '../utilities/format-progress'

import styles from './media-styles'

function MediaPlayer(props) {
  const { classes } = props
  const { episode: { image, podcast, title } } = props
  const { duration, playing, progress, skip, updatePlaying, updateVolume } = props
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
                  <Icon
                    onClick={ skip }
                    className={ ClassNames(classes.controls, classes.skip) }>
                    { 'replay_30' }
                  </Icon>
                  <Icon
                    onClick={ updatePlaying }
                    className={ ClassNames(classes.controls, classes.play) }>
                    { playing ? 'pause' : 'play_arrow' }
                  </Icon>
                  <Icon
                    onClick={ skip }
                    className={ ClassNames(classes.controls, classes.skip) }>
                    { 'forward_30' }
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
            <Grid container
              justify='center'
              alignItems='center'
              className={ classes.volume }>
              <Icon
                className={ classes.volumeControls }>
                { 'volume_down' }
              </Icon>
              <input
                className={ classes.volumeBar }
                id='volume'
                type='range'
                min={ 0 }
                max={ 1 }
                step={ 0.05 }
                onChange={ updateVolume }
              />
              <Icon
                className={ classes.volumeControls }>
                { 'volume_up' }
              </Icon>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

MediaPlayer.propTypes = { classes: PropTypes.object.isRequired }

export default withStyles(styles)(MediaPlayer)

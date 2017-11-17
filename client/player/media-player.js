import React from 'react'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Hidden from 'material-ui/Hidden'
import Icon from 'material-ui/Icon'
import Typography from 'material-ui/Typography'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import formatProgress from '../utilities/format-progress'

import styles from './media-styles'

function MediaPlayer(props) {
  const {
    classes,
    duration,
    episode: { image, podcast, title },
    playing,
    progress,
    seek,
    skip,
    updatePlaying,
    updateVolume
  } = props

  return (
    <Grid container justify='center'>
      <Grid item xs={ 12 } className={ classes.container }>
        <Grid container>
          <Hidden smDown>
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
          </Hidden>
          <Grid item id='player-controls' className={ classes.middle }>
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
                  onChange={ seek }
                  id='progress-bar'
                  type='range'
                  min={ 0 }
                  max={ duration }
                  ref={ props.progressInput }
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
          <Hidden smDown>
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
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  )
}

MediaPlayer.propTypes = { classes: PropTypes.object.isRequired }

export default withStyles(styles)(MediaPlayer)

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'

const styles = {
  container: {
    flexGrow: 1
  },
  sub: {
    width: '100%'
  }
}

function SubForm(props) {
  const { classes, handleSumbit } = props
  return (
    <div className={ classes.container }>
      <Grid container alignItems='center'>
        <Grid item xs={ 12 }>
          <form onSubmit={ handleSumbit } noValidate autoComplete='off'>
            <Grid container justify='center'>
              <Grid item xs={ 10 } md={ 6 }>
                <TextField
                  id='feed'
                  name='feed'
                  label='Subscribe to a Podcast'
                  helperText='Enter a RSS Feed URL.'
                  className={ classes.sub }
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

SubForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SubForm)

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Avatar from 'material-ui/Avatar'

const styles = {
  dimensions: {
    height: '4rem',
    width: '4rem'
  }
}

function CoverArtMain({ classes, alt, src }) {
  return (
    <Avatar
      alt={ alt }
      src={ src }
      className={ classes.dimensions }
    />
  )
}

CoverArtMain.propTypes = { classes: PropTypes.object.isRequired }

export default withStyles(styles)(CoverArtMain)

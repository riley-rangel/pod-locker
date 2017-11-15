import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import ClassNames from 'classnames'
import Avatar from 'material-ui/Avatar'
import Card from 'material-ui/Card'

const styles = {
  container: {
    borderRadius: '100%'
  },
  dimensions: {
    height: '18vw',
    width: '18vw'
  }
}

function CoverArt({ classes, alt, src }) {
  return (
    <Card className={ ClassNames(classes.container, classes.dimensions) }>
      <Avatar
        alt={ alt }
        src={ src }
        className={ classes.dimensions }
      />
    </Card>
  )
}

CoverArt.propTypes = { classes: PropTypes.object.isRequired }

export default withStyles(styles)(CoverArt)
